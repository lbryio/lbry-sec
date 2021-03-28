import React from 'react';
import Head from 'next/head';
import { Twitter } from '../component/twitter';
import { Stripe } from '../component/stripe';
import { t, m } from '../i18n';
import { tracker } from '../analytics';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState();
  const [emailSuccess, setEmailSuccess] = React.useState();
  const lang = 'en'; // req.query.lang || 'en'

  React.useEffect(() => {
    tracker.trackPageView();
  }, []);

  function __(message) {
    return t(message, lang);
  }

  function handleEmailSubmit(e) {
    e.preventDefault();

    if (!email) {
      return;
    }

    setEmailError(false);
    setEmailSuccess(false);
    setEmailLoading(true);

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmailLoading(false);
        setEmailSuccess(true);
      })
      .catch(() => {
        setEmailLoading(false);
        setEmailSuccess(false);
        setEmailError(true);
      });
  }

  return (
    <div>
      <Head>
        <title>{__(m.title)}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://i.imgur.com/pnU7PJz.jpg"
          key="image"
        />
        <meta
          property="og:description"
          content="The SEC doesn’t understand blockchain or crypto. They’re saying LBC is a security, it’s not!"
          key="description"
        />
      </Head>

      <header>
        <span className="title">{__(m.title)}</span>

        <div className="header__links">
          <a
            href="https://docs.google.com/document/d/1QYSruKLjStWZOTTmkatfUZaCdp4lHWwk6TmUvytzTx0/edit#"
            rel="noreferrer noopener"
            target="_blannk"
          >
            {__(m.faq)}
          </a>
        </div>
      </header>

      <main>
        <div className="landing__img-container">
          <img className="landing__img" src="https://i.imgur.com/pnU7PJz.jpg" />
        </div>

        <div className="landing__text">
          <h1 className="landing__title">
            {__(m.help_lbry)}
            <br />
            SAVE CRYPTO
          </h1>
          <div className="landing__subtitle">
            <div>
              The SEC doesn’t understand blockchain or crypto.
              <br />
              They’re saying LBC is a security, it’s not!
            </div>
            <div className="landing__standout">
              <span>Help us educate the SEC</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>What’s the big deal?</h2>
          <div className="content__subtitle">
            The entire blockchain industry is at risk in the US and many hard
            working people could lose their jobs & livelihood!
          </div>
          <p>
            The SEC is claiming the LBRY token does not have utility and is not
            purchased for reasons of usage, therefore they believe it should be
            registered as a security. If LBC were to be classed as a security,
            this would create a major bureaucratic nightmare for all blockchain
            companies and people with crypto. it is also likely that many
            blockchain companies will fold due to being unable to bear the new
            costs of being in business. This would in turn eliminate the jobs
            and income of many millions of people and effectively kill the
            advancement of a critical new technology and industry in the US.
          </p>
          <p>
            Essentially it would effectively make it very difficult for
            ourselves and other blockchain companies to distribute rewards to
            you and for you to exchange them. it is also likely that many
            blockchain companies will fold due to being unable to bear the new
            costs of being in business. This would in turn eliminate the jobs
            and income of many millions of people and effectively kill the
            advancement of a critical new technology and industry in the US
          </p>

          <div className="video">
            {/* <iframe
              id="lbry-iframe"
              src="https://odysee.com/$/embed/odysee/7a416c44a6888d94fe045241bbac055c726332aa?r=A6zE8KtZ6VVk268xANdFViL8znbDXL4F"
              allowFullScreen
            /> */}
          </div>

          <div className="email">
            <h2>Stay up to date</h2>
            <div className="email__subtitle">
              We will keep you up to date with any information we receive about
              this case.
            </div>

            <label htmlFor="email">Email</label>
            <form className="email__group" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                name="email"
                placeholder="ihatecensorship@protonmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button disabled={!email || emailLoading}>
                {emailLoading ? 'Submitting' : 'Submit'}
              </button>
            </form>

            {emailSuccess && (
              <div className="email__success">
                Thank you! We will keep you in the loop.
              </div>
            )}
            {emailError && (
              <div className="email__success">
                Sorry, there was an error. Please try again.
              </div>
            )}
          </div>

          <h2>What are people saying?</h2>
          <div className="content__subtitle">
            Tweet with the hashtag to let the SEC know how you feel.
            <a
              href="https://twitter.com/intent/tweet?text=Down%20with%20the%20SEC!%20%23BattleForCrypto"
              className="petition__link"
              rel="noreferrer noopener"
              target="_blannk"
            >
              #BattleForCrypto
            </a>
          </div>
        </div>
        <Twitter />

        <div className="content">
          <h2>Sign the petition</h2>
          <div className="content__subtitle">
            Who knows, maybe a petition will work.{' '}
            <a className="petition__link">Add your signature</a>.
          </div>

          <h2>Share this story</h2>
          <div className="content__subtitle">Everything helps</div>
        </div>
      </main>
    </div>
  );
}
