import React from "react";
import { StyledHeader } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMoneyBill,
  faClock,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <StyledHeader>
      {/* Top message */}
      <div className="row">
        <div className="col col-left">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          FREE SHIPPING ON ALL ORDER
        </div>
        <div className="col col-mid">
          <FontAwesomeIcon icon={faMoneyBill} className="icon" />
          100% MONEY BACK GUARANTEE
        </div>
        <div className="col col-right">
          <FontAwesomeIcon icon={faClock} className="icon" />
          ONLINE SUPPORT 24/7
        </div>
      </div>

      {/* Logo + Search + Social Media Icons */}
      <div className="row row-logo">
        <div className="col">
          <img
            className="logo"
            src="https://i.ibb.co/mNns8MQ/logo.png"
            alt="logo.png"
          ></img>
        </div>
        <div className="col col-search">
          <input className="search-bar" placeholder="Search"></input>
          <FontAwesomeIcon icon={faSearch} className="icon icon-square" />
        </div>
        <div className="col col-social-media">
          <FontAwesomeIcon icon={faFacebook} className="icon icon-round" />
          <FontAwesomeIcon icon={faTwitter} className="icon icon-round" />
          <FontAwesomeIcon icon={faInstagram} className="icon icon-round" />
          <FontAwesomeIcon icon={faYoutube} className="icon icon-round" />
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
