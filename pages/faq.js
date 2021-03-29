import ReactMarkdown from 'react-markdown';
import md from '../faq.md';

export default function Faq() {
  return (
    <div className="content">
      <ReactMarkdown>{md}</ReactMarkdown>
    </div>
  );
}
