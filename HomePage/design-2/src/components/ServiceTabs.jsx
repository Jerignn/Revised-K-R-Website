import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { serviceTabs } from "../data/content.js";

function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Left / right arrow keys move between tabs (accessibility standard for tabs)
  function handleKeyDown(event) {
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (activeIndex + 1) % serviceTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (activeIndex - 1 + serviceTabs.length) % serviceTabs.length;
    } else {
      return;
    }
    setActiveIndex(nextIndex);
    document.getElementById("t-" + serviceTabs[nextIndex].id).focus();
  }

  return (
    <section className="section section--flush" id="services">
      <div className="wrap">
        <div className="head" data-reveal="1">
          <div>
            <span className="kicker">
              01 <span className="dot"></span> Find your service
            </span>
            <h2>
              Every system.
              <br />
              <span className="hl">One friendly team.</span>
            </h2>
          </div>
          <p className="lede head__lede">We service all makes and models — and give free estimates on new installations.</p>
        </div>

        <div data-reveal="2">
          <div className="tabs__list" role="tablist" aria-label="Service types">
            {serviceTabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  id={"t-" + tab.id}
                  type="button"
                  role="tab"
                  aria-controls={"p-" + tab.id}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown}
                >
                  <span className="n">0{index + 1}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {serviceTabs.map((tab, index) => (
            <div
              className="panel"
              role="tabpanel"
              id={"p-" + tab.id}
              aria-labelledby={"t-" + tab.id}
              hidden={index !== activeIndex}
              key={tab.id}
            >
              <img src={tab.image} alt={tab.imageAlt} loading="lazy" />
              <div className="panel__body">
                <h3>{tab.title}</h3>
                <p>{tab.text}</p>
                <ul className="pills">
                  {tab.pills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
                <div>
                  <Button href={tab.buttonLink} variant="dark">
                    {tab.buttonText} <Icon name="arrow" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTabs;
