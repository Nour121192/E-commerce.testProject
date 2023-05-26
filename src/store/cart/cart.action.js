import { cart_types } from "./cart.type";

export const setCartItems = (updateCartItems) => {
  return {
    type: cart_types.cartItemsAndIsDropped,
    payload: { cartItems: updateCartItems },
  };
};

export const setIsDropped = (isDropped) => {
  return {
    type: cart_types.cartItemsAndIsDropped,
    payload: { isDropped: !isDropped },
  };
};
