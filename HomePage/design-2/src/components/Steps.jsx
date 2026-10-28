import Head, { section } from "./ui.jsx";
import { steps } from "../data/content.js";

// Three numbered steps joined by a dashed line (the line hides on phones)
function Steps() {
  return (
    <section className={section}>
      <div className="wrap">
        <Head kicker="How it works" center={true}>
          Back to comfort in three steps.
        </Head>

        <ol className="relative grid gap-8 sm:grid-cols-3 sm:before:absolute sm:before:inset-x-[16%] sm:before:top-7 sm:before:h-0.5 sm:before:bg-[repeating-linear-gradient(90deg,var(--color-line)_0_10px,transparent_10px_18px)]">
          {steps.map((step, index) => (
            <li className="relative px-3 text-center" data-reveal={String(index + 1)} key={step.title}>
              <span className="relative mx-auto mb-5 grid size-14 place-items-center rounded-full border-2 border-blue bg-white text-[22px] font-extrabold text-blue">
                {index + 1}
              </span>
              <h3 className="mb-2 text-[22px]">{step.title}</h3>
              <p className="mx-auto max-w-[32ch] text-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Steps;
