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
              <span>The SEC are dorks.</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>What is happening?</h2>
          <div className="content__subtitle">
            Some subtitle about below text.
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
              allowfullscreen
            ></iframe>
          </div>

          <div className="email">
            <h2>Stay up to date</h2>
            <div className="email__subtitle">
              We will keep you up to date with any information we receive about
              this case.
            </div>

            <label htmlFor="email">Email</label>
            <div className="email__group">
              <input
                type="email"
                name="email"
                placeholder="ihatecensorship@protonmail.com"
              />
              <button>Submit</button>
            </div>
          </div>

          <h2>Sign the petition</h2>
          <div className="content__subtitle">
            We know petitions don't do very much, but everything helps.
          </div>

          <div className="petition">Petition iframe or link</div>
        </div>
      </main>
    </div>
  );
}
