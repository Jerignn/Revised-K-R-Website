// A row of simple text cards: [{ title, text }]
// Used for the About values and the Financing benefits.
// The cards take turns between the cream, tint and sky colours.
function InfoCards({ items }) {
  return (
    <div className="info-cards">
      {items.map((item, index) => (
        <div className="info-card" data-reveal={String((index % 3) + 1)} key={item.title}>
          <span className="n">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
