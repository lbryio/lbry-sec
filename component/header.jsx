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
        <link rel="icon" href="/lbc.png" />

        <title>Help LBRY Save Crypto</title>

        <meta
          property="og:title"
          content="LBRY, THE SEC, & THE FUTURE OF CRYPTO"
          key="title"
        />

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
        <meta
          name="twitter:description"
          content="The SEC doesn’t understand blockchain. The claims made in SEC vs. LBRY would destroy crypto in the US."
        />
      </Head>

      <header className={faqPage ? 'header header--faq' : 'header'}>
        <Link href="/">
          <span className="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z"
                fill="black"
              />
              <path
                d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                fill="black"
              />
              <path
                d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                fill="black"
              />
              <path
                d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                fill={`url(#paint0_linear)`}
              />
              <path
                d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                fill={`url(#paint1_linear)`}
              />
              <path
                d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z"
                fill={`url(#paint2_linear)`}
              />
              <path
                d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z"
                fill={`url(#paint3_linear)`}
              />

              <defs>
                <linearGradient
                  id={`paint0_linear`}
                  x1="3.7206"
                  y1="14.2649"
                  x2="15.1645"
                  y2="14.2649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2464" stopColor="#E700FF" />
                  <stop offset="0.3166" stopColor="#E804F9" />
                  <stop offset="0.4108" stopColor="#E90EE8" />
                  <stop offset="0.5188" stopColor="#EC1FCC" />
                  <stop offset="0.637" stopColor="#F037A5" />
                  <stop offset="0.7635" stopColor="#F45672" />
                  <stop offset="0.8949" stopColor="#FA7A36" />
                  <stop offset="1" stopColor="#FF9B00" />
                </linearGradient>
                <linearGradient
                  id={`paint1_linear`}
                  x1="2.60274"
                  y1="8.40089"
                  x2="15.14"
                  y2="8.40089"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.4233" stopColor="#FABD09" />
                  <stop offset="0.8292" stopColor="#FA6B00" />
                </linearGradient>
                <linearGradient
                  id={`paint2_linear`}
                  x1="6.8682"
                  y1="14.1738"
                  x2="25.405"
                  y2="4.84055"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAFF8E" />
                  <stop offset="0.6287" stopColor="#008EBB" />
                </linearGradient>
                <linearGradient
                  id={`paint3_linear`}
                  x1="25.2522"
                  y1="6.08799"
                  x2="3.87697"
                  y2="27.836"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAFF8E" />
                  <stop offset="0.6287" stopColor="#008EBB" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="title__lbry">LBRY</span>
            <span className="title__rest">
              , THE SEC, & THE FUTURE OF CRYPTO
            </span>
          </span>
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
