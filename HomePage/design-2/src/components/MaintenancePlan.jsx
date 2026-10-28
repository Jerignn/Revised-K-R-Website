import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { planRows } from "../data/content.js";

// One side of the comparison, shown as a pricing card.
// member: true for the plan card, false for the "no plan" card
function PlanCard({ member }) {
  return (
    <div className={member ? "plan-card plan-card--member" : "plan-card"}>
      <h3>{member ? "Plan member" : "No plan"}</h3>
      <div className="price">
        {member ? (
          <>
            <small>From </small>$180<small> / year</small>
          </>
        ) : (
          "Pay per visit"
        )}
      </div>
      <p className="plan-card__sub">{member ? "Two visits a year, plus member perks." : "Standard rates, no member perks."}</p>

      <ul>
        {planRows.map((row) => {
          const included = member ? row.member : row.noPlan;
          return (
            <li className={included ? "is-yes" : "is-no"} key={row.text}>
              <span className="mark" aria-hidden="true">{included ? <Icon name="check" /> : "—"}</span>
              <span className="sr-only">{included ? "Included: " : "Not included: "}</span>
              {row.text}
            </li>
          );
        })}
      </ul>

      {member && (
        <Button href="#contact">
          Join the plan <Icon name="arrow" />
        </Button>
      )}
    </div>
  );
}

function MaintenancePlan() {
  return (
    <section className="section plan" id="plan">
      <div className="wrap plan__grid">
        <div data-reveal="1">
          <span className="kicker">Preventive maintenance plan</span>
          <h2>Is the plan worth it? Here's the difference.</h2>
          <p className="lede">
            A complete 20+ point inspection and tune-up of your heating and cooling, twice a year — for lower
            bills, fewer breakdowns and longer equipment life.
          </p>
          <span className="promo-tag">
            <Icon name="tag" size={16} /> Free maintenance package with complete system installs
          </span>
        </div>

        <div className="plan__cards" data-reveal="2">
          <PlanCard member={true} />
          <PlanCard member={false} />
        </div>
      </div>
    </section>
  );
}

export default MaintenancePlan;
