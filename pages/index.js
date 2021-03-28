import React from 'react';
import Head from 'next/head';
import { Twitter } from '../component/twitter';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState();
  const [emailSuccess, setEmailSuccess] = React.useState();

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
        <title>LBRY, THE SEC, & THE FUTURE OF CRYPTO</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://imgur.com/a/tRFLEgp"
          key="image"
        />
      </Head>

      <header>
        <span className="title">LBRY, THE SEC, & THE FUTURE OF CRYPTO</span>

        <div className="header__links">
          <a
            href="https://docs.google.com/document/d/1QYSruKLjStWZOTTmkatfUZaCdp4lHWwk6TmUvytzTx0/edit#"
            rel="noreferrer noopener"
            target="_blannk"
          >
            VIEW FAQ
          </a>
        </div>
      </header>

      <main>
        <div className="landing__img" />

        <div className="landing__text">
          <h1 className="landing__title">
            HELP LBRY
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
          <h2>What is happening?</h2>
          <div className="content__subtitle">
            The SEC is bringing a case against LBRY, Inc, which could harm the
            entire cryptocurrency space.
          </div>
          <p>
            The Securities and Exchange Commission has filed a case against
            LBRY, Inc. alleging that all distributions of LBRY Credits by LBRY,
            Inc. are unregistered securities offerings.
          </p>
          <p>
            The SEC is claiming the LBRY token does not have utility and is not
            purchased for reasons of usage, which fortunately for everyone
            involved in cryptocurrency, makes this an extremely winnable case.
            Should LBRY, Inc. lose this case, it is likely that most other
            blockchain companies, as well as most individuals working on
            blockchain, would also be culpable.
          </p>

          <div className="video">
            <iframe
              id="lbry-iframe"
              src="https://odysee.com/$/embed/odysee/7a416c44a6888d94fe045241bbac055c726332aa?r=A6zE8KtZ6VVk268xANdFViL8znbDXL4F"
              allowFullScreen
            />
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
        </div>
        <Twitter />

        <div className="content">
          <h2>Sign the petition</h2>
          <div className="content__subtitle">
            Who knows, maybe a petition will work.{' '}
            <a className="petition__link">Add your signature</a>.
          </div>

          <h2>Donate</h2>
          <div className="content__subtitle">Money please</div>
        </div>
      </main>
    </div>
  );
}
