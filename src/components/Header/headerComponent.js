import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/homeIcon.svg";
import "./header.styles.scss";
export const HeaderComponent = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" top="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
