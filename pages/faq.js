import ReactMarkdown from 'react-markdown';
import { Header } from '../component/header';
import md from '../faq.md';

export default function Faq() {
  return (
    <>
      <Header faqPage />
      <div className="content">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </>
  );
}
