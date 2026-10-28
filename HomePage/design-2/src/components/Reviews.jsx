import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business, reviews } from "../data/content.js";

function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap reviews__grid">
        <div className="reviews__intro" data-reveal="1">
          <span className="kicker">Reviews</span>
          <h2>Neighbors who stayed comfortable.</h2>
          <p className="lede">Five-star service, in our customers' own words.</p>
          <Button href={business.reviewsLink} variant="outline" external={true}>
            All Google reviews <Icon name="arrow" />
          </Button>
        </div>

        <div className="reviews__list">
          {reviews.map((review, index) => (
            <figure className="review" data-reveal={String((index % 2) + 1)} key={review.name}>
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
