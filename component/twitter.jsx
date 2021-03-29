import React from 'react';

export function Twitter() {
  const [tweets, setTweets] = React.useState();
  const [error, setError] = React.useState();
  React.useEffect(() => {
    fetch('/api/twitter')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw Error(res.error);
        }

        setTweets(
          res.data.statuses.filter((tweet) => tweet.favorite_count > 5)
        );
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (!tweets || !(tweets.length > 5)) {
    return null;
  }

  return (
    <div className="content">
      <h2 className="content__section-title">What are people saying?</h2>
      <div className="twitter">
        {!error && !tweets && (
          <div className="tweets tweets--static">
            <div className="tweet--placeholder" />
            <div className="tweet--placeholder" />
            <div className="tweet--placeholder" />
            <div className="tweet--placeholder" />
            <div className="tweet--placeholder" />
          </div>
        )}

        {error && (
          <div className="content">
            <div className="twitter__error content__subtitle">
              The twitter overlords can't seem to find any tweets right now.
              Maybe our API limits are up. Check back later. Or view it on
              Twitter{' '}
              <a
                href="https://twitter.com/search?q=%23lbry"
                className="twitter__error-link"
                rel="noopener"
                target="_blank"
              >
                here
              </a>
              .
            </div>
          </div>
        )}

        {tweets && tweets.length > 0 && (
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
                      <div className="tweet__handle">
                        @{tweet.user.screen_name}
                      </div>
                    </div>
                  </div>

                  <div className="tweet__text">{tweet.text}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
