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
    <div className="acc">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div className={isOpen ? "acc__item is-open" : "acc__item"} key={item.title}>
            <button className="acc__btn" type="button" aria-expanded={isOpen} onClick={() => handleClick(index)}>
              <span className="n">{number}</span>
              <span className="t">{item.title}</span>
              <span className="ic">
                <Icon name="plus" />
              </span>
            </button>

            <div className="acc__panel">
              <div className="acc__inner">
                <div className="acc__body">
                  <p>{item.text}</p>
                  {item.list && (
                    <ul>
                      {item.list.map((point) => (
                        <li key={point}>{point}</li>
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
