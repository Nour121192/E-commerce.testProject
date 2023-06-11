import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setIsDropped } from './cart.reducer';
import { createSelector } from "reselect";

export const cartItemsSelection = (state) => state.cartItems.cartItems;
export const isDroppedSelection = (state) => state.cartItems.isDropped;
// export const itemsCountSelection = (state) => state.cartItems.itemsCount;
// export const totalPriceSelection = (state) => state.cartItems.totalPrice;

const AddCartItem = (cartItems, productToAdd) => {
  const isCartHaveAnItem = cartItems.some(
    (item) => item.id === productToAdd.id
  );

  if (isCartHaveAnItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const IncriAndDecriQuantity = (action, id, cartItems) => {
  const cartItemsClone = [];
  cartItems.forEach((item, index) => {
    console.log("ss");
    if (item.id === id) {
      if (action === "plus") {
        cartItemsClone.push({ ...item, quantity: item.quantity + 1 });
        // return { ...item, quantity: item.quantity + 1 };
      } else if (action === "minus" && item.quantity > 1) {
        cartItemsClone.push({ ...item, quantity: item.quantity - 1 });
        // return { ...item, quantity: item.quantity - 1 };
      }
    } else {
      cartItemsClone.push(item);
    }
  });
  console.log(cartItemsClone);
  return cartItemsClone;
};

const removingItems = (id, cartItems) => {
  return cartItems.filter((item) => item.id !== id);
};

// .......memomize totalitems and totalprice functions with creat selector
const cartItemsState = (state) => state.cartItems;

const itemsCountSelection = createSelector([cartItemsState], (cartItemsFromReducer) =>
  cartItemsFromReducer.cartItems.reduce((per, curr) => {
    return per + curr.quantity;
  }, 0)
);

const totalPriceSelection = createSelector([cartItemsState], (cartItemsFromReducer) =>
  cartItemsFromReducer.cartItems.reduce((perv, curr) => {
    return perv + curr.price * curr.quantity;
  }, 0)
);

export const useCartItems = () => {
  // .....top component.....
  const dispatch = useDispatch();

  const setItems = (cartItems) => {
    // const itemsCount = cartItems.reduce((per, curr) => {
    //   return per + curr.quantity;
    // }, 0);

    // const totalPrice = cartItems.reduce((perv, curr) => {
    //   return perv + curr.price * curr.quantity;
    // }, 0);

    dispatch(setCartItems(cartItems));
  };

  //   ..... ya rab

  const plusMinusHandler = (action, id) => {
    setItems(IncriAndDecriQuantity(action, id, cartItems));
  };

  const removeItem = (id) => {
    setItems(removingItems(id, cartItems));
  };

  const addItemToCart = (productToAdd) => {
    setItems(AddCartItem(cartItems, productToAdd));
  };

  //..... selection from redux store.....
  const cartItems = useSelector(cartItemsSelection);
  const isDropped = useSelector(isDroppedSelection);
  const totalPrice = useSelector(totalPriceSelection);
  const itemsCount = useSelector(itemsCountSelection);

  //..... dispatch the actions.....
  const setDropped = (isDropped) => dispatch(setIsDropped(isDropped));
  //   const setItems = (newCartItems) => dispatch(setCartItems(newCartItems))

  return {
    cartItems,
    isDropped,
    setDropped,
    plusMinusHandler,
    removeItem,
    addItemToCart,
    totalPrice,
    itemsCount,
  };
};
