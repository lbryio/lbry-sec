import React from 'react';
import { m } from '../i18n';

export function Twitter({ i18n }) {
  const [tweets, setTweets] = React.useState();
  const [error, setError] = React.useState();
  React.useEffect(() => {
    fetch('/api/twitter')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw Error(res.error);
        }

        setTweets(res.data.statuses);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (!tweets) {
    return null;
  }

  return (
    tweets &&
    tweets.length > 0 && (
      <div className="tweets">
        {tweets.map((tweet) => (
          <a
            key={tweet.id}
            className="tweet"
            href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img className="tweet_img" src={tweet.user.profile_image_url} />

            <div className="tweet__content">
              <div className="tweet__author">
                <div className="tweet__name">
                  <div className="tweet__username">{tweet.user.name}</div>
                  <div className="tweet__handle">@{tweet.user.screen_name}</div>
                </div>
              </div>

              <div className="tweet__text">{tweet.text}</div>
            </div>
          </a>
        ))}
      </div>
    )
  );
}
