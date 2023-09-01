import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { Img } from "react-image";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div className={type === "menu" ? "header menuMode" : "header"}>
      <div className="header-items">
        <div className="header-left">
          <ul>
            <li onClick={() => navigate("/")} className="header-link">
              Menu
            </li>
            <li onClick={() => navigate("/delivery")} className="header-link">
              Dowóz
            </li>
            <li onClick={() => navigate("/contact")} className="header-link">
              Kontakt
            </li>
          </ul>
        </div>
        <div className="logo-container">
          <Img
            className="logo"
            src="http://127.0.0.1:5173/public/img/pizzeria-logo.png"
            alt=""
            onClick={() => navigate("/")}
          />
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
