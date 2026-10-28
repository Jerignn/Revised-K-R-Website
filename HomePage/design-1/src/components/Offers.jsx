import SectionHead, { fine, section } from "./ui.jsx";
import { offers } from "../data/content.js";

// One clip-out coupon. Also used on the Promotions page.
export function Coupon({ offer, index }) {
  return (
    <div
      className="relative flex flex-col gap-2 border-2 border-dashed border-ink bg-paper px-6 py-7 before:absolute before:-top-[13px] before:left-[18px] before:bg-paper before:px-1.5 before:text-base/none before:content-['✂']"
      data-reveal={String((index % 3) + 1)}
    >
      <strong className="font-serif text-[60px]/[0.95] font-normal tracking-[-0.03em] text-rust">{offer.price}</strong>
      <h3 className="text-2xl">{offer.title}</h3>
      <p className="text-[15px] text-ink-soft">{offer.text}</p>
    </div>
  );
}

// Current deals, styled like clip-out coupons
function Offers() {
  return (
    <section className={section + " border-t border-hair"} id="offers">
      <div className="wrap">
        <SectionHead label="§ 05 — Clip & save">
          Save on <em>comfort.</em>
        </SectionHead>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <Coupon offer={offer} index={index} key={offer.title} />
          ))}
        </div>

        <p className={fine}>
          Offers subject to restrictions. Expire December 31, 2026. Call for details. Special financing
          available on new systems.
        </p>
      </div>
    </section>
  );
}

export default Offers;
