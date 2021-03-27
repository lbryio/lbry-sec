import { renderSync } from 'sass';

const AUTH_TOKEN = process.env.COMMANDER_AUTH_TOKEN;
const API = 'https://api.lbry.com/';
const USER_TAG = 'lbry-sec';

const USER_DOES_NOT_EXIST = 'USER_DOES_NOT_EXIST';

function buildUrl(email, createUser) {
  let url = `${API}/users/tag?auth_token=${AUTH_TOKEN}&emails=${encodeURIComponent(
    email
  )}&tag=${USER_TAG}`;

  if (createUser) {
    url += `&create_user=true`;
  }

  return url;
}

export default (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.statusCode = 400;
    res.json({ error: true });
    return;
  }

  return fetch(buildUrl(email))
    .then((res) => res.json())
    .then((res) => {
      if (res.data && res.data.failed_emails.length > 0) {
        throw Error(USER_DOES_NOT_EXIST);
      }

      res.statusCode = 200;
      res.json({ success: true });
    })
    .catch((error) => {
      if (error.message === USER_DOES_NOT_EXIST) {
        return fetch(buildUrl(email, true))
          .then((res) => res.json())
          .then((data) => {
            res.statusCode = 200;
            res.json({ success: true });
          });
      }

      res.statusCode = 400;
      res.json({ error });
    });
};
