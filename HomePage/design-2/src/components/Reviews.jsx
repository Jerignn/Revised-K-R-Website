import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { Kicker, lede, section } from "./ui.jsx";
import { business, reviews } from "../data/content.js";

function Reviews() {
  return (
    <section className={section} id="reviews">
      <div className="wrap grid items-start gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.8fr_1.6fr]">
        {/* The intro stays in view while the reviews scroll past (desktop) */}
        <div className="lg:sticky lg:top-[110px]" data-reveal="1">
          <Kicker>Reviews</Kicker>
          <h2 className="mb-3.5">Neighbors who stayed comfortable.</h2>
          <p className={lede + " mb-6"}>Five-star service, in our customers' own words.</p>
          <Button href={business.reviewsLink} variant="outline" external={true}>
            All Google reviews <Icon name="arrow" />
          </Button>
        </div>

        {/* Two columns, the second nudged down for a staggered look */}
        <div className="grid gap-4 sm:grid-cols-2 sm:pb-7">
          {reviews.map((review, index) => (
            <div className="sm:even:translate-y-7" key={review.name}>
              <figure className="flex h-full flex-col gap-3.5 rounded-2xl border border-line bg-white p-6" data-reveal={String((index % 2) + 1)}>
                <div className="text-[15px] tracking-[2px] text-amber-500" role="img" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{review.text}”</blockquote>
                <figcaption className="mt-auto">
                  <cite className="flex items-center gap-2.5 text-[15px] font-semibold not-italic">
                    {/* First letter of the name in a circle */}
                    <i className="grid size-9 place-items-center rounded-full bg-blue-tint font-bold text-blue not-italic" aria-hidden="true">
                      {review.name.charAt(0)}
                    </i>
                    {review.name}
                  </cite>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
