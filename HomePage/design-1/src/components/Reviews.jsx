import { reviews } from "../data/content.js";

// One review as a big pull quote, the rest in narrow columns beneath it
function Reviews() {
  const [lead, ...rest] = reviews;

  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="section-head" data-reveal="1">
          <span className="eyebrow">§ 02 — Letters from neighbors</span>
          <h2>
            Real reviews from <em>real neighbors.</em>
          </h2>
        </div>

        <figure className="pullquote" data-reveal="2">
          <div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“{lead.text}”</blockquote>
          <figcaption>
            <cite>— {lead.name}</cite>
          </figcaption>
        </figure>

        <div className="reviews__cols">
          {rest.map((review, index) => (
            <figure className="review" data-reveal={String((index % 3) + 1)} key={review.name}>
              <div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{review.text}”</blockquote>
              <figcaption>
                <cite>{review.name}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
