import SectionHead, { section } from "./ui.jsx";
import { services } from "../data/content.js";

// Every service as an entry in a two-column ledger
function Services() {
  return (
    <section className={section} id="services">
      <div className="wrap">
        <SectionHead
          label="§ 03 — The full list"
          text="From routine tune-ups to complete system replacements. We service all makes and models, and installations come with a free estimate."
        >
          Complete comfort for your <em>home or business.</em>
        </SectionHead>

        <ol className="grid gap-x-[clamp(32px,5vw,72px)] lg:grid-cols-2">
          {services.map((service, index) => (
            <li className="grid grid-cols-[48px_1fr] gap-3 border-t border-hair py-[26px]" data-reveal={String((index % 2) + 1)} key={service.title}>
              <span className="text-[15px]/[2.1] font-semibold text-rust-dk">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="mb-2 text-[30px]">{service.title}</h3>
                <p className="text-ink-soft">{service.text}</p>
                <p className="mt-2.5 font-serif text-lg/[1.5]">{service.list.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Services;
