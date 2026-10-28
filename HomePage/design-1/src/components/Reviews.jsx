import { reviews } from "../data/content.js";

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <div data-reveal="1">
          <span className="eyebrow">Customer reviews</span>
          <h2 className="section-title">
            Real reviews from <em>real neighbors</em>
          </h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => {
            // The first review is the big rust card
            const isBig = index === 0;
            // Stagger the fade-in: 1, 2, 3, 2, 3
            const delay = index === 0 ? "1" : String(((index + 1) % 2) + 2);

            return (
              <figure className={isBig ? "review review--big" : "review"} data-reveal={delay} key={review.name}>
                <div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{review.text}”</blockquote>
                <figcaption>
                  <cite>{review.name}</cite>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
