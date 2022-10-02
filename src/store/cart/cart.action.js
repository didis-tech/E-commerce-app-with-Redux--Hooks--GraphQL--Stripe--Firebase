import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

// const { cartItems } = store.getState().cart;
const addCartItem = (cartItems, productToAdd) => {
  // find if item exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //   if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return new array with modified cartitems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceCartItemQuanity = (cartItems, product) => {
  if (product.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  //   if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
  // return new array with modified cartitems
  return [...cartItems];
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
export const decreaseItemQuanity = (cartItems, product) => {
  const newCartItems = reduceCartItemQuanity(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== product.id
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
