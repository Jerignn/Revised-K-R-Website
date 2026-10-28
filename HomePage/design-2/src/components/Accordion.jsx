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
    <div className="acc">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={isOpen ? "acc__item is-open" : "acc__item"} key={item.title}>
            <button className="acc__btn" type="button" aria-expanded={isOpen} onClick={() => handleClick(index)}>
              {item.title}
              <span className="ic">
                <Icon name="plus" />
              </span>
            </button>

            <div className="acc__panel">
              <div className="acc__inner">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
