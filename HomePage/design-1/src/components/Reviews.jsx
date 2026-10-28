import SectionHead, { section } from "./ui.jsx";
import { reviews } from "../data/content.js";

const stars = "tracking-[4px] text-[15px] text-rust";
const cite = "font-mono text-xs/none font-medium tracking-[0.12em] text-ink-soft uppercase not-italic";

// One review as a big pull quote, the rest in narrow columns beneath it
function Reviews() {
  const [lead, ...rest] = reviews;

  return (
    <section className={section + " bg-paper-2"} id="reviews">
      <div className="wrap">
        <SectionHead label="§ 02 — Letters from neighbors">
          Real reviews from <em>real neighbors.</em>
        </SectionHead>

        <figure className="mx-auto mb-[clamp(48px,6vw,72px)] max-w-[980px] text-center" data-reveal="2">
          <div className={stars} role="img" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote className="mt-[18px] mb-[22px] font-serif text-[clamp(30px,3.8vw,52px)]/[1.18] tracking-[-0.01em] italic">
            “{lead.text}”
          </blockquote>
          <figcaption>
            <cite className={cite + " text-[13px]"}>— {lead.name}</cite>
          </figcaption>
        </figure>

        <div className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((review, index) => (
            <figure
              className="flex flex-col gap-3.5 border-b border-hair py-6 sm:max-lg:even:border-l sm:max-lg:even:pl-6 lg:border-b-0 lg:border-l lg:px-[clamp(16px,2vw,26px)] lg:pt-[26px] lg:pb-0 lg:first:border-l-0 lg:first:pl-0"
              data-reveal={String((index % 3) + 1)}
              key={review.name}
            >
              <div className={stars} role="img" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="font-serif text-lg/[1.45]">“{review.text}”</blockquote>
              <figcaption className="mt-auto">
                <cite className={cite}>{review.name}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
