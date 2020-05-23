import React from "react";
import "./chekcout.styles.scss";
const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">PRODUCT</div>
        <div className="header-block">DESCRIPTION</div>
        <div className="header-block">QUANTITY</div>
        <div className="header-block">PRICE</div>
        <div className="header-block">REMOVE</div>
      </div>
    </div>
  );
};
export default CheckoutPage;
