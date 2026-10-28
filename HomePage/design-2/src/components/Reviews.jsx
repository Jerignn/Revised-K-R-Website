import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business, reviews } from "../data/content.js";

function Reviews() {
  return (
    <section className="section section--reviews" id="reviews">
      <div className="wrap">
        <div className="head" data-reveal="1">
          <div>
            <span className="kicker">Reviews</span>
            <h2>
              Neighbors who <span className="hl">stayed comfy.</span>
            </h2>
          </div>
          <Button href={business.reviewsLink} variant="light" external={true}>
            All Google reviews <Icon name="arrow" />
          </Button>
        </div>

        <div className="reviews__row" data-reveal="2" tabIndex="0" role="region" aria-label="Customer reviews">
          {reviews.map((review) => (
            <figure className="review" key={review.name}>
              <div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{review.text}”</blockquote>
              <figcaption>
                <cite>
                  {/* First letter of the name in a circle */}
                  <i aria-hidden="true">{review.name.charAt(0)}</i>
                  {review.name}
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
