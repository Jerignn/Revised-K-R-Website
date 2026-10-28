import PageHero from "../components/PageHero.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";

// Shown when the address doesn't match any page
function NotFoundPage() {
  return (
    <>
      <PageHero kicker="Page not found" title="This page" highlight="isn't here." text="The link may be old or mistyped." />
      <section className="section">
        <div className="wrap">
          <Button href="#/">
            Back to the homepage <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
