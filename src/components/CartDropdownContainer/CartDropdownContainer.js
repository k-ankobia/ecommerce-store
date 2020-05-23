import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CustomButton } from "../CustomButton/CustomButton";
import { CartDropdownItem } from "../cartDropdownItem/cartDropdownItem";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.reselecotors";
import "./cartDropdownContainer.styles.scss";

const CartDropdownContainer = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartDropdownItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("./checkout")}>
        {" "}
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdownContainer));
