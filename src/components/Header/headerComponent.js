import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/homeIcon.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdownContainer/CartDropdownContainer";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import {
  selectCartHidden,
  selectCurrentUser,
} from "../../redux/user/user.reselector";

const HeaderComponent = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            {" "}
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(HeaderComponent);
