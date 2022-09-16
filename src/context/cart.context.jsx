import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  addItemToCart: () => {},
  setIsCartOpen: () => {},
  removeItemFromCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    setCartItems(newCartItems);
  };
  const decreaseItemQuanity = (product) => {
    const newCartItems = reduceCartItemQuanity(cartItems, product);
    setCartItems(newCartItems);
  };
  const removeItemFromCart = (product) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(newCartItems);
  };

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartCount,
    decreaseItemQuanity,
    removeItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
