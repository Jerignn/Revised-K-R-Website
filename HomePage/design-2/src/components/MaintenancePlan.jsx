import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { planRows } from "../data/content.js";

// A tick for "included", a dash for "not included" (with words for screen readers)
function Mark({ included }) {
  if (included) {
    return (
      <span className="mark mark--yes">
        <Icon name="check" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  return (
    <span className="mark">
      <span aria-hidden="true">—</span>
      <span className="sr-only">Not included</span>
    </span>
  );
}

function MaintenancePlan() {
  return (
    <section id="plan">
      <div className="plan" data-reveal="1">
        <div className="plan__content">
          <span className="kicker">Preventive maintenance plan</span>
          <h2>Is the plan worth it? Here's the difference.</h2>
          <div className="price">
            <small>From </small>$180<small> / year · 2 visits</small>
          </div>
          <p>
            A complete 20+ point inspection and tune-up of your heating and cooling, twice a year — for lower
            bills, fewer breakdowns and longer equipment life.
          </p>
          <Button href="#contact" variant="dark">
            Join the plan <Icon name="arrow" />
          </Button>
          <div>
            <span className="promo-tag">Free maintenance package with complete system installs</span>
          </div>
        </div>

        <table className="compare">
          <caption className="sr-only">What plan members get compared with no plan</caption>
          <thead>
            <tr>
              <th scope="col">What you get</th>
              <th scope="col" className="compare__member">Plan member</th>
              <th scope="col">No plan</th>
            </tr>
          </thead>
          <tbody>
            {planRows.map((row) => (
              <tr key={row.text}>
                <th scope="row">{row.text}</th>
                <td className="compare__member"><Mark included={row.member} /></td>
                <td><Mark included={row.noPlan} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MaintenancePlan;
