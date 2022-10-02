import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartCount = createSelector([selectCartItems], (cart) => {
  const newCartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return newCartCount;
});
export const selectCartTotal = createSelector([selectCartItems], (cart) => {
  const newCartTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return newCartTotal;
});
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
