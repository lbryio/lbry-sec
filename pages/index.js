import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TBD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <span className="title">TBD TITLE</span>

        <div className="header__links">
          <a
            href="https://docs.google.com/document/d/1QYSruKLjStWZOTTmkatfUZaCdp4lHWwk6TmUvytzTx0/edit#"
            rel="noopener"
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
            Save LBRY
            <br />
            Save Crypto
          </h1>
          <div className="landing__subtitle">
            <div>Some catchy subtitle that says some different things.</div>
            <div className="landing__subtitle-catchy">
              <i>The SEC are dorks.</i>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>What is happening?</h2>
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
            <iframe src="https://drive.google.com/file/d/1G3atQZ8ZQWor0RPMoVyxEZMhMxZKD8Qa/preview"></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
