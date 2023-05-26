import { cart_types } from "./cart.type";

const intialValues = {
  cartItems: [],
  isDropped: false,
  // itemsCount: 0,
  // totalPrice: 0,
};

export const cartReducer = (state = intialValues, action = {}) => {
  switch (action.type) {
    // case cart_types.isDropped:
    //     return {...state,...action.payload}
    case cart_types.cartItemsAndIsDropped:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
