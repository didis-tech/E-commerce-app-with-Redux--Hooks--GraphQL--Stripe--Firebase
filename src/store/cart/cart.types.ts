import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEM = "cart/SET_CART_ITEM",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
}

export type CartItem = CategoryItem & { quantity: number };

// export type CartItems = {
//   [key: string]: CartItem[];
// };
