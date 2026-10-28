import { card } from "./ui.jsx";

// A row of simple numbered cards: [{ title, text }]
// Used for the About values and the Financing benefits.
function InfoCards({ items }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div className={card + " flex flex-col gap-2 p-[26px]"} data-reveal={String((index % 3) + 1)} key={item.title}>
          <span className="mb-2 grid size-10 place-items-center rounded-[10px] bg-blue-tint text-sm font-bold text-blue">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl">{item.title}</h3>
          <p className="text-[15px] text-soft">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
