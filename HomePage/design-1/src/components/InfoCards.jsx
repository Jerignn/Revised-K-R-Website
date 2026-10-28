// A row of numbered notes: [{ title, text }]
// Used for the About values and the Financing benefits.
function InfoCards({ items }) {
  return (
    <div className="mt-11 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div className="flex flex-col gap-2 border-t-2 border-ink pt-[18px]" data-reveal={String((index % 3) + 1)} key={item.title}>
          <span className="text-[15px]/none font-semibold text-rust-dk">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-2xl">{item.title}</h3>
          <p className="text-[17px] text-ink-soft">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
