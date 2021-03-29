import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { t, m } from '../i18n';

export function Header(props) {
  const { faqPage } = props;

  const lang = 'en'; // req.query.lang || 'en'

  function __(message) {
    return t(message, lang);
  }

  return (
    <>
      <Head>
        <title>{__(m.title)}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://i.imgur.com/onVjlEW.jpg"
          key="image"
        />
        <meta
          property="og:description"
          content={__(m.og_description)}
          key="description"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@LBRYcom" />
        <meta name="twitter:title" content="Help LBRY Save Crypto" />

      </Head>

      <header className={faqPage ? 'header header--faq' : 'header'}>
        <Link href="/">
          <span className="title">{__(m.title)}</span>
        </Link>
        <div className="header__links">
          {!faqPage ? (
            <Link href="/faq">
              <span className="link">FAQ</span>
            </Link>
          ) : (
            <Link href="/">
              <span className="link">{__(m.go_home)}</span>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
