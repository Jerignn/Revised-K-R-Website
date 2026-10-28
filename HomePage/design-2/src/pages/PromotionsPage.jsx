import PageHero from "../components/PageHero.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Contact from "../components/Contact.jsx";
import { promotions, promoFinePrint } from "../../../shared/pages.js";

// Promotions — every current offer
function PromotionsPage() {
  return (
    <>
      <PageHero
        kicker="Promotions"
        title="Save on"
        highlight="comfort."
        text="Current deals on tune-ups, maintenance plans and new systems. Mention the offer when you call or book."
      />

      <section className="section">
        <div className="wrap">
          <div className="promos">
            {promotions.map((offer, index) => (
              <div className="promo" data-reveal={String((index % 3) + 1)} key={offer.title}>
                <strong>{offer.price}</strong>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            ))}
          </div>
          <p className="fine">{promoFinePrint}</p>
        </div>
      </section>

      <MaintenancePlan />
      <div className="spacer"></div>
      <Contact />
    </>
  );
}

export default PromotionsPage;
