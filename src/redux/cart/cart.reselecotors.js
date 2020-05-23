import { createSelector } from "reselect";
const selectCart = (state) => state.cart;
// extract only the cart from state

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
// select the cart-items from the copied cart {selectCart}

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatorQuantity, cartItem) =>
        accumulatorQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (accumulatedCost, cartItem) =>
      accumulatedCost + cartItem.quantity * cartItem.price,
    0
  )
);
// method to calc item count from the cart items
