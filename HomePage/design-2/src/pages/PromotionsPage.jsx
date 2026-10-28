import PageHero from "../components/PageHero.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Contact from "../components/Contact.jsx";
import { card, fine, lift, section } from "../components/ui.jsx";
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

      <section className={section}>
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {promotions.map((offer, index) => (
              // The wrapper fades in; the card inside lifts on hover
              <div className="flex" data-reveal={String((index % 3) + 1)} key={offer.title}>
                <div className={card + " " + lift + " flex flex-1 flex-col gap-2 p-7"}>
                  <strong className="text-[44px]/none font-extrabold tracking-[-0.04em] text-rust">{offer.price}</strong>
                  <h3 className="text-xl">{offer.title}</h3>
                  <p className="text-[15px] text-soft">{offer.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={fine}>{promoFinePrint}</p>
        </div>
      </section>

      <MaintenancePlan />
      <Contact />
    </>
  );
}

export default PromotionsPage;
