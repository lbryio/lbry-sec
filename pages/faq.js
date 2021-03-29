import ReactMarkdown from 'react-markdown';
import { Header } from '../component/header';
import { Email } from '../component/email';
import md from '../faq.md';

export default function Faq() {
  return (
    <div>
      <Header faqPage />

      <main>
        <div className="content md">
          <ReactMarkdown>{md}</ReactMarkdown>
        </div>

        <Email />
      </main>
    </div>
  );
}
