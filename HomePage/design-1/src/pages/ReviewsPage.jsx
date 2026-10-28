import PageHero from "../components/PageHero.jsx";
import Reviews from "../components/Reviews.jsx";
import Contact from "../components/Contact.jsx";

// About Us — Reviews
function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="What our customers"
        highlight="say"
        text="We're proud of every five-star review. Here's what our neighbors have to say about K&R."
        crumbs={[{ label: "About Us", href: "#/about" }, { label: "Reviews", href: "#/about/reviews" }]}
      />
      <Reviews />
      <Contact />
    </>
  );
}

export default ReviewsPage;
