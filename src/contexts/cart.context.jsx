import { createContext, useReducer } from "react";
import { createAction } from "../utils/firebase/reducer/reducer.utils";
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsInCartQuantity: 0,
  totalItemsInCartPrice: 0,
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  itemsInCartQuantity: 0,
  totalItemsInCartPrice: 0,
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

const addCardItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const deleteCardItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContextProvider = ({ children }) => {
  const [
    { cartItems, isCartOpen, itemsInCartQuantity, totalItemsInCartPrice },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalItemsInCartPrice: newCartTotalPrice,
        itemsInCartQuantity: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCardItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    const newCartItems = deleteCardItem(cartItems, cartItemToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemsInCartQuantity,
    removeItemFromCart,
    deleteItemFromCart,
    totalItemsInCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
