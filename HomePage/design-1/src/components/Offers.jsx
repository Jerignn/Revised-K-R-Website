import { offers } from "../data/content.js";

// Current deals, styled like clip-out coupons
function Offers() {
  return (
    <section className="section offers" id="offers">
      <div className="wrap">
        <div className="section-head" data-reveal="1">
          <span className="eyebrow">§ 05 — Clip &amp; save</span>
          <h2>
            Save on <em>comfort.</em>
          </h2>
        </div>

        <div className="offers__grid">
          {offers.map((offer, index) => (
            <div className="offer" data-reveal={String((index % 3) + 1)} key={offer.title}>
              <strong>{offer.price}</strong>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </div>
          ))}
        </div>

        <p className="fine">
          Offers subject to restrictions. Expire December 31, 2026. Call for details. Special financing
          available on new systems.
        </p>
      </div>
    </section>
  );
}

export default Offers;
