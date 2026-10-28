// A row of simple text cards: [{ title, text }]
// Used for the About values and the Financing benefits.
function InfoCards({ items }) {
  return (
    <div className="offers__grid">
      {items.map((item, index) => (
        <div className="offer" data-reveal={String((index % 3) + 1)} key={item.title}>
          <span className="offer__n">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
