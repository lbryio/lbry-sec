import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from '../component/header';
import { Email } from '../component/email';
import md from '../faq.md';

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
  return (
    <div>
      <Header faqPage />

      <main>
        <div className="content md">
          <ReactMarkdown renderers={{ heading: HeadingRenderer }}>
            {md}
          </ReactMarkdown>
        </div>

        <Email />
      </main>
    </div>
  );
}
