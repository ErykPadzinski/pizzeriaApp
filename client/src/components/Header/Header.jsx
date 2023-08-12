import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <div className="header-left">
          <ul>
            <li>Menu</li>
            <li>Dowóz</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className="logo-container">
          <img className="logo" src="img/pizzeria-logo.png" alt="" />
        </div>
        <div className="header-right">
          <div className="phone">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#ffffff" }}
              className="phone-icon"
            />
            <p className="phone-number">123 456 789</p>
          </div>
        </div>
      </div>
      <div className="content">
        <h2 className="content-title">
          Nasze Pizze z Najświeższych Naturalnych Składników!
        </h2>
        <button className="content-button">ZOBACZ MENU</button>
      </div>
    </div>
  );
};

export default Header;
