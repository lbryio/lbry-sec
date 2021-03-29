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
            {__(m.save_crypto)}
          </h1>
          <div className="landing__subtitle">
            <div>{__(m.landing_subtitle)}</div>
            <div className="landing__standout">
              <span>{__(m.landing_action)}</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title">{__(m.summary_title)}</h2>
          <div className="content__subtitle">{__(m.summary_subtitle)}</div>

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

          <h2 className="content__section-title" id="share">Share this story</h2>
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
          <h2 className="content__section-title" id="petition">Sign the petition</h2>
          <div className="content__subtitle">
            Tell the SEC that cryptocurrency must remain legal
            and free.{' '}
            <a className="link" href="https://www.change.org/p/28064277">
              Add your signature
            </a>
            .
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title" id="donate">Donate</h2>
          <div className="content__subtitle">
            If you want to go far, go together.
          </div>
          <table className="content__table">
            <tr>
              <th>BTC</th>
              <td>
                <code>bc1qtfylps0guegw83el0tn3c7s35cyy728fskk6a8</code>
              </td>
            </tr>
            <tr>
              <th>ETH & ERC</th>
              <td>
                <code>0x13Dd57244116Ae29fd4346436494AAF4C72c5e84</code>
              </td>
            </tr>
            <tr>
              <th>LBC</th>
              <td>
                <code>lbc1qwpt9caexxzqlpw07h7jyh28r60hf86t9xn6flk</code>
              </td>
            </tr>
          </table>
        </div>

        <Email />

        <div className="content">
          <h2 className="content__section-title">Try LBRY</h2>
          <div className="content__subtitle">
            If the government and big tech want it gone, it must be good.
          </div>
          <p>
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
          </p>
        </div>

        <div className="content">
          <h2 className="content__section-title" id="contact">Contact Us</h2>
          <p>Press inquiries: <a className="link" href="mailto:press@lbry.com">press@lbry.com</a></p>
          <p>Legal: <a className="link" href="mailto:legal@lbry.com">legal@lbry.com</a></p>
          <p>Other email: <a className="link" href="mailto:savecrypto@lbry.com">savecrypto@lbry.com</a></p>
          <p>Twitter: <a className="link" href="https://twitter.com/lbrycom">@LBRYcom</a></p>
        </div>
      </main>
    </div>
  );
}
