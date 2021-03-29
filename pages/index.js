import React from 'react';
import Image from 'next/image';
import { Header } from '../component/header';
import { Twitter } from '../component/twitter';
import { Email } from '../component/email';
import { t, m } from '../i18n';
import { tracker } from '../analytics';

export default function Home() {
  const lang = 'en'; // req.query.lang || 'en'

  React.useEffect(() => {
    tracker.trackPageView();
  }, []);

  function __(message) {
    return t(message, lang);
  }

  return (
    <div>
      <Header />

      <main>
        <div className="landing__img-container">
          <img className="landing__img" src="https://i.imgur.com/onVjlEW.jpg" />
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
              LBRY would destroy the United States cryptocurrency
              industry.
            </div>
            <div className="landing__standout">
              <span>Help us educate the SEC</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title">What’s the big deal?</h2>
          <div className="content__subtitle">
            The entire blockchain industry is at risk in the United States. Big
            tech and Wall St. would have more power and many people could lose
            their jobs!
          </div>

          {/* <div>
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
          </div> */}

          <div className="content__section">
            <p>
              The SEC is advancing an aggressive and disastrous new standard
              that would make almost all blockchain tokens securities.
              <br />
              <br />
              Classifying all blockchain tokens as securities will be a
              bureaucratic nightmare for United States residents and businesses
              operating in the US.
            </p>

            <div className="content__img content__img--question">
              <Image
                src="/question.png"
                alt="Image of LBRY cartoon"
                layout="fill"
              />
            </div>
          </div>
          <div className="content__section">
            <div className="content__img content__img--megaphone">
              <Image
                className="content__img"
                src="/megaphone.png"
                alt="Image of LBRY cartoon"
                layout="fill"
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

          <h2 className="content__section-title">Share this story</h2>
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

        <Twitter />

        <div className="content">
          <h2 className="content__section-title">Sign the petition</h2>
          <div className="content__subtitle">
            Tell Gary Gensler and the SEC that cryptocurrency must remain legal
            and free.{' '}
            <a className="link" href="https://www.change.org/p/28064277">
              Add your signature
            </a>
            .
          </div>
        </div>

        <Email />

        <div className="content">
          <h2 className="content__section-title">Try LBRY</h2>
          <div className="content__subtitle">
            If the government and big tech want it gone, it must be good.
          </div>
          <div>
            <div className="lbry__try">
              <a href="https://lbry.com/get" className="link">
                LBRY Desktop
              </a>{' '}
              (decentralized and open-source)
            </div>
            <div className="lbry__try">
              <a href="https://odysee.com" className="link">
                Odysee
              </a>{' '}
              (easiest to use)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
