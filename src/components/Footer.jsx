import "./footer.css";
import IconButton from "./IconButton";
import KeepInTouch from "./KeepInTouch";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-column">
        <p className="foot-header">ONLINE SHOPPING</p>
        <ul className="ul">
          <li className="ul-item">Men</li>
          <li className="ul-item">Women</li>
          <li className="ul-item">Kids</li>
          <li className="ul-item">Home</li>
          <li className="ul-item">Beauty</li>
          <li className="ul-item">Genz</li>
          <li className="ul-item">Gift Cards</li>
          <li className="ul-item">Myntra Insider</li>
        </ul>
      </div>
      <div className="second-column">
        <p className="foot-header"> CUSTOMER POLICIES </p>
        <ul className="ul">
          <li className="ul-item">Contact Us</li>
          <li className="ul-item">FAQ</li>
          <li className="ul-item">T&C</li>
          <li className="ul-item">Terms OF Use</li>
          <li className="ul-item">Shipping</li>
          <li className="ul-item">Cancellation</li>
          <li className="ul-item">Returns</li>
          <li className="ul-item">Privacy policy</li>
          <li className="ul-item">Grievence Redressal</li>
        </ul>
      </div>
      <div className="third-column">
        <p className="foot-header">EXPERIENCE MYNTRA APP ON MOBILE</p>
        <div className="social-button">
          <IconButton />
          <KeepInTouch />
        </div>
      </div>
      <div className="fourth-column">
        <div className="first">
          <img className="rg-icon" src="original.png" alt="not present" />
          <span className="org-text">
            <b>100% ORIGINAL </b>guarantee for all products at myntra.com{" "}
          </span>
        </div>
        <div className="second">
          <img className="rg-icon" src="14.png" alt="not present" />
          <span className="org-text">
            <b>Return within 14days</b> of receiving your order
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
