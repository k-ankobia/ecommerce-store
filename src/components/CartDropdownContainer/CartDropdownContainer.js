import React from "react";
import { connect } from "react-redux";

import { CustomButton } from "../CustomButton/CustomButton";
import { CartDropdownItem } from "../cartDropdownItem/cartDropdownItem";

import { selectCartItems } from "../../redux/cart/cart.reselecotors";
import "./cartDropdownContainer.styles.scss";

const CartDropdownContainer = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdownContainer);
