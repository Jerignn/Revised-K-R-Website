import { useState } from "react";
import Icon from "./Icon.jsx";

// A list of questions/sections where only one can be open at a time.
// items: [{ title, text, list? }]
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
    <div className="border-t-2 border-ink">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div className="border-b border-hair" key={item.title}>
            <button
              className="group grid w-full cursor-pointer grid-cols-[36px_1fr_28px] items-baseline gap-3 py-[22px] text-left text-ink sm:grid-cols-[48px_1fr_32px]"
              type="button"
              aria-expanded={isOpen}
              onClick={() => handleClick(index)}
            >
              <span className="text-[15px]/none font-semibold text-rust-dk">{number}</span>
              <span className={"font-serif text-[22px]/[1.3] transition-colors group-hover:text-rust " + (isOpen ? "italic" : "")}>{item.title}</span>
              <span className={"grid place-items-center transition-transform duration-300 [&_svg]:size-[18px] " + (isOpen ? "rotate-45 text-rust" : "")}>
                <Icon name="plus" />
              </span>
            </button>

            {/* Animates open by growing the grid row from 0 to its natural height */}
            <div className={"grid transition-[grid-template-rows] duration-400 ease-soft " + (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <div className="pb-[26px] sm:grid sm:grid-cols-[48px_1fr] sm:gap-3 sm:pr-8">
                  <p className="text-ink-soft sm:col-start-2">{item.text}</p>
                  {item.list && (
                    <ul className="mt-2.5 sm:col-start-2">
                      {item.list.map((point) => (
                        <li className="border-b border-dotted border-hair py-1.5 text-[17px]" key={point}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
