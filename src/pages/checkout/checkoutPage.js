import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.reselecotors";

import "./checkoutPage.styles.scss";
const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">PRODUCT</div>
        <div className="header-block">DESCRIPTION</div>
        <div className="header-block">QUANTITY</div>
        <div className="header-block">PRICE</div>
        <div className="header-block">REMOVE</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:£{cartTotal} </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
