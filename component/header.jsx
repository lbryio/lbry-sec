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
          content="The SEC doesn’t understand blockchain or crypto. They’re saying LBC is a security, it’s not!"
          key="description"
        />
      </Head>

      <header className={faqPage ? 'header header--faq' : 'header'}>
        <Link href="/">
          <span className="title">{__(m.title)}</span>
        </Link>

        {!faqPage && (
          <div className="header__links">
            <Link className="link" href="/faq">
              {__(m.faq)}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
