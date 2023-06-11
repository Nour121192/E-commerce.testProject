// import { cart_types } from "./cart.type";

import { createSlice } from "@reduxjs/toolkit";

const intialValues = {
  cartItems: [],
  isDropped: false,
  // itemsCount: 0,
  // totalPrice: 0,
};

const cartSlice = createSlice({
  name:"cartItems",
  initialState:intialValues,
  reducers:{
    setCartItems (state,action){
      state.cartItems = action.payload
    },
    setIsDropped:(state,action) => {state.isDropped = action.payload}
  }
})

export const cartReducer = cartSlice.reducer
export const {setCartItems,setIsDropped}= cartSlice.actions

// export const cartReducer = (state = intialValues, action = {}) => {
//   switch (action.type) {
//     // case cart_types.isDropped:
//     //     return {...state,...action.payload}
//     case cart_types.cartItemsAndIsDropped:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };
