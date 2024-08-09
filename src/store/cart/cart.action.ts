import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/firebase/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

const addCardItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCardItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCardItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCardItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCardItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  cartItemToDelete: CartItem
) => {
  const newCartItems = deleteCardItem(cartItems, cartItemToDelete);
  return setCartItems(newCartItems);
};
