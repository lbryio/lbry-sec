const API = 'https://api.lbry.com/';
const USER_TAG = 'lbry-sec';

function buildUrl(email) {
  let url = `${API}/list/subscribe?email=${encodeURIComponent(
    email
  )}&tag=${USER_TAG}`;

  return url;
}

export default (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.statusCode = 400;
    res.json({ error: 'no email passed to api' });
    return;
  }

  return fetch(buildUrl(email))
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw Error(res.error);
      }

      res.statusCode = 200;
      res.json({ success: true });
    })
    .catch((error) => {
      res.statusCode = 400;
      res.json({ error });
    });
};
