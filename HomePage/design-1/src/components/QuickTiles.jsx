import { quickTiles } from "../data/content.js";

function QuickTiles() {
  return (
    <nav className="tiles" aria-label="Quick services">
      {quickTiles.map((tile) => (
        <a className="tile" href={tile.href} key={tile.title}>
          <span className="n">{tile.number}</span>
          <h2>{tile.title}</h2>
          <p>{tile.text}</p>
        </a>
      ))}
    </nav>
  );
}

export default QuickTiles;
