import './TextSnippet.css';

function TextSnippet({ label, href }) {
  return (
    <div className="TextSnippet">
      <header className="TextSnippet-header">
        <a
          className="TextSnippet-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </header>
    </div>
  );
}

export default TextSnippet;
