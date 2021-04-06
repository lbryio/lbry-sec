import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Header } from '../component/header';
import { Twitter } from '../component/twitter';
import { Email } from '../component/email';
import { t, m } from '../i18n';
import { tracker } from '../analytics';

export default function Home() {
  const router = useRouter();
  const lang = router.query.lang || 'en';

  let faqHref = '/faq';
  if (lang !== 'en') {
    faqHref += `?lang=${lang}`;
  }

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
            {/*
            <div className="landing__standout">
              <span>{__(m.landing_action)}</span>
            </div>

*/}
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title">{__(m.summary_title)}</h2>
          <div className="content__subtitle">{__(m.summary_subtitle)}</div>

          {/* <div>
            <small>
              {__(m.video_subtitle)}{' '}
              <a className="link" href="/faq">
                {__(m.video_link)}
              </a>
            </small>
          </div> */}
          <div className="video">
            <iframe
              id="lbry-iframe"
              src="https://odysee.com/$/embed/Govt-Sues-LBRY/75dac1da9f4296f0f55a04d0ad9e181456f0ad46?r=A6zE8KtZ6VVk268xANdFViL8znbDXL4F"
              allowFullScreen
            />
          </div>

          <div className="content__section">
            <p>
              {__(m.p1_a)}
              <br />
              <br />
              {__(m.p1_b)}
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
              {__(m.p2_a)}
              <br />
              <br />
              {__(m.p2_b)}
            </p>
          </div>

          <h2 className="content__section-title" id="share">
            {__(m.share_story_title)}
          </h2>
          <div className="content__subtitle">
            {__(m.share_story_subtitle)}
            &nbsp;
            <a
              href="https://twitter.com/intent/tweet?text=LBRY%20and%20cryptocurrencies%20are%20useful%20technologies%20that%20must%20remain%20legal%20and%20free%20%23HelpLBRYSaveCrypto%0A%0Awww.helplbrysavecrypto.com"
              className="link"
              rel="noreferrer noopener"
              target="_blank"
            >
              #HelpLBRYSaveCrypto
            </a>
          </div>

          <Twitter i18n={__} />
        </div>

        <div className="content">
          <h2 className="content__section-title" id="petition">
            {__(m.petition_title)}
          </h2>
          <div className="content__subtitle">
            {__(m.petition_subtitle)}
            &nbsp;
            <a
              className="link"
              href="https://www.change.org/p/u-s-securities-and-exchange-commission-cryptocurrency-is-not-a-crime"
              rel="noreferrer noopener"
              target="_blank"
            >
              {__(m.petition_link)}
            </a>
            .
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title" id="petition">
            {__(m.read_more_title)}
          </h2>
          <div className="content__subtitle">
            {__(m.read_more_subtitle)}
            &nbsp;
            <a className="link" href={faqHref}>
              {__(m.read_more_link)}
            </a>
            .
          </div>
        </div>

        <Email i18n={__} />

        <div className="content">
          <h2 className="content__section-title">{__(m.try_lbry_title)}</h2>
          <div className="content__subtitle">{__(m.try_lbry_subtitle)}</div>

          <div className="lbry__try">
            <p>
              <a
                href="https://lbry.com/get"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                {__(m.try_lbry_desktop_link)}
              </a>{' '}
              ({__(m.try_lbry_desktop_help)})
            </p>
          </div>
          <div className="lbry__try">
            <p>
              <a
                href="https://odysee.com"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                Odysee
              </a>{' '}
              ({__(m.try_odysee_help)})
            </p>
          </div>
        </div>

        <div className="content">
          <h2 className="content__section-title" id="contact">
            {__(m.contact_title)}
          </h2>
          <p>
            {__(m.contact_press)}:{' '}
            <a className="link" href="mailto:press@lbry.com">
              press@lbry.com
            </a>
          </p>
          <p>
            {__(m.contact_legal)}:{' '}
            <a className="link" href="mailto:legal@lbry.com">
              legal@lbry.com
            </a>
          </p>
          <p>
            {__(m.contact_other_email)}:{' '}
            <a className="link" href="mailto:savecrypto@lbry.com">
              savecrypto@lbry.com
            </a>
          </p>
          <p>
            Twitter:{' '}
            <a
              className="link"
              href="https://twitter.com/lbrycom"
              rel="noreferrer noopener"
              target="_blank"
            >
              @LBRYcom
            </a>
          </p>
          <p>
            {__(m.contact_discord)}:{' '}
            <a
              className="link"
              href="https://chat.lbry.org"
              rel="noreferrer noopener"
              target="_blank"
            >
              LBRY Discord
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
