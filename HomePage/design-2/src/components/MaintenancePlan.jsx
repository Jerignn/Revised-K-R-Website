import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { Kicker, lede, section } from "./ui.jsx";
import { planRows } from "../data/content.js";

// One side of the comparison, shown as a pricing card.
// member: true for the navy plan card, false for the white "no plan" card
function PlanCard({ member }) {
  // Colours that differ between the two cards
  let look = {
    card: "border-line bg-white",
    muted: "text-soft",
    rule: "border-line",
    yes: "bg-blue-tint text-blue",
  };
  if (member) {
    look = {
      card: "border-navy bg-navy text-white shadow-lift",
      muted: "text-fog",
      rule: "border-white/14",
      yes: "bg-sky/18 text-sky",
    };
  }

  return (
    <div className={"flex flex-col gap-1.5 rounded-[20px] border p-7 " + look.card}>
      <h3 className={"text-[15px] font-bold tracking-[0.06em] uppercase " + look.muted}>{member ? "Plan member" : "No plan"}</h3>
      <div className="text-[32px] font-extrabold tracking-[-0.03em]">
        {member ? (
          <>
            <small className={"text-[15px] font-medium tracking-normal " + look.muted}>From </small>$180
            <small className={"text-[15px] font-medium tracking-normal " + look.muted}> / year</small>
          </>
        ) : (
          "Pay per visit"
        )}
      </div>
      <p className={"mb-3 text-sm " + look.muted}>{member ? "Two visits a year, plus member perks." : "Standard rates, no member perks."}</p>

      <ul className={"mb-5 grid gap-2.5 border-t pt-3.5 text-sm " + look.rule}>
        {planRows.map((row) => {
          const included = member ? row.member : row.noPlan;
          return (
            <li className={"flex items-start gap-2.5 " + (included ? "" : "text-[#6b7686] line-through decoration-[#6b7686]/40")} key={row.text}>
              <span
                className={"mt-px grid size-5 flex-none place-items-center rounded-full text-xs [&_svg]:size-3 " + (included ? look.yes : "bg-surface-2 text-[#6b7686]")}
                aria-hidden="true"
              >
                {included ? <Icon name="check" /> : "—"}
              </span>
              <span className="sr-only">{included ? "Included: " : "Not included: "}</span>
              {row.text}
            </li>
          );
        })}
      </ul>

      {member && (
        <Button href="#contact" className="mt-auto">
          Join the plan <Icon name="arrow" />
        </Button>
      )}
    </div>
  );
}

function MaintenancePlan() {
  return (
    <section className={section + " bg-surface"} id="plan">
      <div className="wrap grid items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.9fr_1.3fr]">
        <div data-reveal="1">
          <Kicker>Preventive maintenance plan</Kicker>
          <h2 className="mb-4">Is the plan worth it? Here's the difference.</h2>
          <p className={lede}>
            A complete 20+ point inspection and tune-up of your heating and cooling, twice a year — for lower
            bills, fewer breakdowns and longer equipment life.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-3.5 py-2.5 text-sm font-semibold text-rust">
            <Icon name="tag" size={16} /> Free maintenance package with complete system installs
          </span>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-[1.15fr_1fr]" data-reveal="2">
          <PlanCard member={true} />
          <PlanCard member={false} />
        </div>
      </div>
    </section>
  );
}

export default MaintenancePlan;
