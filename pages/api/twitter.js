import Twitter from 'twitter';

var client = new Twitter({
  bearer_token:
    'AAAAAAAAAAAAAAAAAAAAAMM7OAEAAAAAnyZGPrtcyMxTcMaeEKs2w5h9tLE%3DIhFiagHIQttMtwim6PC6bdSWVRKh8yciPNYSQONsZ0SW9pPlwg',
  consumer_key: 'QHDGGCESRXnzIPqjkM5gXeFJW',
  consumer_secret: 'UOmIuZIrqqOHDoWPwDmP9MhSMC8Jg0TseZcudx0JckdNrtqVCs',
  access_token_key: '409427707-xOAx3oBfwsh5FesJYxrYlcN7wlU7wXDRcPfRxUtT',
  access_token_secret: 'WbUYTqNm0zeweC5HRawXfq2OKxDVKrY5OD6W0MJqtnrgp',
});

let cachedTweets;
let cacheDate;
const CACHE_TIME = 1 * 60 * 1000;

export default (req, res) => {
  const skipCache = cacheDate && new Date() - cacheDate > CACHE_TIME;

  if (cachedTweets && cacheDate && !skipCache) {
    res.statusCode = 200;
    return res.json({ data: cachedTweets });
  }

  return new Promise((resolve, reject) => {
    client.get(
      'search/tweets',
      { q: '#lbry', count: 50 },
      function (error, tweets, response) {
        if (error) {
          res.statusCode = 500;
          Promise.resolve(res.json({ error: 'Unable to fetch tweets' }));
          return;
        }

        cachedTweets = tweets;
        cacheDate = new Date();

        res.statusCode = 200;
        Promise.resolve(res.json({ data: tweets }));
      }
    );
  });
};
