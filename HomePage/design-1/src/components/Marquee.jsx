import { marqueeWords } from "../data/content.js";

// The words are shown twice so the scrolling loop has no gap
function Marquee() {
  const allWords = [...marqueeWords, ...marqueeWords];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {allWords.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
