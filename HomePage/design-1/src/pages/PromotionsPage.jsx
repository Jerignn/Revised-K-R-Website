import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";
import { Coupon } from "../components/Offers.jsx";
import { fine, section } from "../components/ui.jsx";
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

      <section className={section}>
        <div className="wrap">
          <div className="grid gap-[18px] gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {promotions.map((offer, index) => (
              <Coupon offer={offer} index={index} key={offer.title} />
            ))}
          </div>
          <p className={fine}>{promoFinePrint}</p>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default PromotionsPage;
