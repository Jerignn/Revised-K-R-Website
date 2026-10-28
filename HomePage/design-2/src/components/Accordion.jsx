import { useState } from "react";
import Icon from "./Icon.jsx";

// A list of questions where only one answer can be open at a time.
// items: [{ title, text }]
// firstOpen: true to open the first item when the page loads

function Accordion({ items, firstOpen = false }) {
  const [openIndex, setOpenIndex] = useState(firstOpen ? 0 : null);

  function handleClick(index) {
    // Clicking the open item closes it, clicking another one opens that one
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div className="grid gap-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={"rounded-[14px] border bg-white transition " + (isOpen ? "border-blue shadow-card" : "border-line")} key={item.title}>
            <button
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-[22px] py-5 text-left text-[17px]/[1.4] font-semibold text-ink"
              type="button"
              aria-expanded={isOpen}
              onClick={() => handleClick(index)}
            >
              {item.title}
              <span
                className={
                  "grid size-8 flex-none place-items-center rounded-full transition duration-300 [&_svg]:size-4 " +
                  (isOpen ? "rotate-45 bg-blue text-white" : "bg-surface")
                }
              >
                <Icon name="plus" />
              </span>
            </button>

            {/* Animates open by growing the grid row from 0 to its natural height */}
            <div className={"grid transition-[grid-template-rows] duration-350 ease-soft " + (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-[22px] pb-[22px] text-soft">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
