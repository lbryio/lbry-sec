import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { Header } from '../component/header';
import { Email } from '../component/email';
import { tracker } from '../analytics';
import { t, m } from '../i18n';
import EN_MD from '../faq/en.md';
import ES_MD from '../faq/es.md';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, '');
  var slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement('h' + props.level, { id: slug }, props.children);
}

export default function Faq() {
  const router = useRouter();
  const lang = router.query.lang || 'en';

  let md;
  switch (true) {
    case lang === 'es':
      md = ES_MD;
      break;
    default:
      md = EN_MD;
  }

  React.useEffect(() => {
    tracker.trackPageView(window.location.pathname);
  }, []);

  function __(message) {
    return t(message, lang);
  }

  return (
    <div>
      <Header faqPage />

      <main>
        <div className="content md">
          <ReactMarkdown renderers={{ heading: HeadingRenderer }}>
            {md}
          </ReactMarkdown>
        </div>

        <Email i18n={__} />
      </main>
    </div>
  );
}
