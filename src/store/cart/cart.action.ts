import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/categories.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

// const { cartItems } = store.getState().cart;
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const reduceCartItemQuanity = (
  cartItems: CartItem[],
  product: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (product.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  //   if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
  // return new array with modified cartitems
  return [...cartItems];
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEM,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEM, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CartItem
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const decreaseItemQuanity = (
  cartItems: CartItem[],
  product: CartItem
): SetCartItems => {
  const newCartItems = reduceCartItemQuanity(cartItems, product);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (
  cartItems: CartItem[],
  product: CartItem
): SetCartItems => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== product.id
  );
  return setCartItems(newCartItems);
};
