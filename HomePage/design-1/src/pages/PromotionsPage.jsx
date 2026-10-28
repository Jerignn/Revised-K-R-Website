import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";
import { promotions, promoFinePrint } from "../../../shared/pages.js";

// Promotions — every current offer
function PromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Promotions"
        title="Save on"
        highlight="comfort"
        text="Current deals on tune-ups, maintenance plans and new systems. Mention the offer when you call or book."
      />

      <section className="section offers">
        <div className="wrap">
          <div className="offers__grid offers__grid--3">
            {promotions.map((offer, index) => (
              <div className="offer" data-reveal={String((index % 3) + 1)} key={offer.title}>
                <strong>{offer.price}</strong>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            ))}
          </div>
          <p className="fine">{promoFinePrint}</p>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default PromotionsPage;
