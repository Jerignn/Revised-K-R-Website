import { business } from "../data/content.js";
import logo from "../../../assets/img/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src={logo} alt="K&R Heating & Cooling" width="186" height="109" loading="lazy" />
            <p className="footer__about">Locally owned &amp; operated. Your home comfort is our #1 priority.</p>
          </div>

          <div>
            <h2 className="footer__title">Services</h2>
            <ul>
              <li><a href="#services">Air Conditioners</a></li>
              <li><a href="#services">Furnaces</a></li>
              <li><a href="#services">Ductless</a></li>
              <li><a href="#commercial">Commercial</a></li>
            </ul>
          </div>

          <div>
            <h2 className="footer__title">Company</h2>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#plan">Maintenance plans</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="footer__title">Visit</h2>
            <ul>
              <li><a href={business.phoneLink}>{business.phone}</a></li>
              <li>
                <address>
                  {business.street}
                  <br />
                  {business.city}
                </address>
              </li>
              <li>Open 24/7</li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>© {year} K&amp;R Heating &amp; Cooling. All rights reserved.</span>
          <span>It's not a gamble.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
