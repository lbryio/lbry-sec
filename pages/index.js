import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
            className="link"
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
              The SEC doesn’t understand blockchain. The claims made in SEC vs.
              LBRY, Inc. would destroy the United States cryptocurrency
              industry.
            </div>
            <div className="landing__standout">
              <span>Help us educate the SEC</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>What’s the big deal?</h2>
          <div className="content__subtitle">
            The entire blockchain industry is at risk in the United States. Big
            tech and Wall St. would have more power and many people could lose
            their jobs!
          </div>
          <div>
            <small>
              Warning / Enticement: this video is more entertainment than
              education, read the
              <a className="link" href="https://odysee.com/helplbrysavecrypto">
                Case Guide & FAQ
              </a>
              for facts
            </small>
          </div>
          <div className="video">
            <iframe
              id="lbry-iframe"
              src="https://odysee.com/$/embed/odysee/7a416c44a6888d94fe045241bbac055c726332aa?r=A6zE8KtZ6VVk268xANdFViL8znbDXL4F"
              allowFullScreen
            />
          </div>

          <div className="content__section">
            <p>
              The SEC is advancing an aggressive and disastrous new standard
              that would make almost all blockchain tokens securities.
              <br />
              <br />
              Classifying all blockchain tokens as securities will be a
              bureaucratic nightmare for United States residents and
              businesses operating in the US.
            </p>

            <div className="content__img">
              <Image
                src="/machine.png"
                alt="Image of LBRY cartoon"
                layout="fill"
              />
            </div>
          </div>
          <div className="content__section">
            <div className="content__img">
              <Image
                className="content__img"
                src="/megaphone.png"
                alt="Image of LBRY cartoon"
                layout="fill"

                //   height={100}
                //   width={100}
              />
            </div>

            <p>
              Under this new standard, almost any token is a security, including
              the previously safe ETH. The SEC additionally claims that token
              sales are sales of securities too!
              <br />
              <br />
              This change will make it much harder for startups to form new
              blockchain companies, cause massive job loss, and stunt the
              development of a critical new technology. All the while, big tech
              and Wall St. prosper!
            </p>
          </div>

          <h2>Share this story</h2>
          <div className="content__subtitle">
            Post to social media to spread awareness. &nbsp;
            <a
              href="https://twitter.com/intent/tweet?text=LBRY%20and%20cryptocurrencies%20are%20useful%20technologies%20that%20must%20remain%20legal%20and%20free%20%23HelpLBRYSaveCrypto%0A%0Awww.helplbrysavecrypto.com"
              className="link"
              rel="noreferrer noopener"
              target="_blannk"
            >
              #HelpLBRYSaveCrypto
            </a>
          </div>
        </div>

        <div className="content">
          <h2>What are people saying?</h2>
          <Twitter />
        </div>

        <div className="content">
          <h2>Sign the petition</h2>
          <div className="content__subtitle">
            Tell Gary Gensler and the SEC that cryptocurrency must remain legal
            and free.{' '}
            <a className="link" href="https://www.change.org/p/28064277">
              Add your signature
            </a>
            .
          </div>
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

        <div className="content">
          <h2>Try LBRY</h2>
          <div className="content__subtitle">
            If the government and big tech want it gone, it must be good.
          </div>
          <div>
            <a href="https://lbry.com/get" className="link">
              LBRY Desktop
            </a>{' '}
            (decentralized and open-source)
            <a href="https://odysee.com" className="link">
              Odysee
            </a>{' '}
            (easiest to use)
          </div>
        </div>
      </main>
    </div>
  );
}
