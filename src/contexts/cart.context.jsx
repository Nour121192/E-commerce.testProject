import { createContext, useEffect, useReducer } from "react";

export const CartStorage = createContext();

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

// ...reducers
const Actions = {
  TogglingCart: "toggling cart drop dowen",
  addingTheCart: "addingTheCart",
  removingItem: "removingItem",
  plusMinus: "plusMinus",
  itemsCount: "itemsCount",
  TotalPrice: "total price",
};

const reducer = (state, action) => {
  const { isDropped } = state;
  switch (action.type) {
    case Actions.TogglingCart:
      return { ...state, isDropped: !isDropped };
    case Actions.addingTheCart:
      return { ...state, cartItems: action.payload };
    case Actions.removingItem:
      return {
        ...state,
        cartItems: removingItems(action.payload, state.cartItems),
      };
    case Actions.plusMinus:
      return { ...state, cartItems: action.payload };
    case Actions.itemsCount:
      return { ...state, itemsCount: action.payload };
    case Actions.TotalPrice:
      return { ...state, totalPrice: action.payload };
    default:
      throw console.error(action.type);
  }
};

// const reducer = (state, {type,payload}) => {
//   const { isDropped } = state;
//   // const {cartItems,total,totalItems} = payload
//   switch (type) {
//     case Actions.TogglingCart:
//       return { ...state, isDropped: !isDropped };
//     case "update cart":
//       return {...state,...payload}
//     default:
//       throw console.error(type);
//   }
// };

export const CartProvider = ({ children }) => {
  // const [isDropped, setIsDropped] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  // ********* usereduce mangement*************
  const [{ isDropped, cartItems, itemsCount, totalPrice }, dispatch] =
    useReducer(reducer, {
      isDropped: false,
      cartItems: [],
      itemsCount: 0,
      totalPrice: 0,
    });

  useEffect(() => {
    const ResultItems = cartItems.reduce((per, curr) => {
      return per + curr.quantity;
    }, 0);
    dispatch({
      type: Actions.itemsCount,
      payload: ResultItems,
    });
  }, [cartItems]);

  useEffect(() => {
    const Total = cartItems.reduce((perv, curr) => {
      return perv + curr.price * curr.quantity;
    }, 0);
    dispatch({ type: Actions.TotalPrice, payload: Total });
  }, [cartItems]);

  // const updateCartReducer = (newCartItems) => {
  //   const Total = newCartItems.reduce((perv, curr) => {
  //     return perv + curr.price * curr.quantity;
  //   }, 0);

  //   const ResultItems = newCartItems.reduce((per, curr) => {
  //     return per + curr.quantity;
  //   }, 0);
  
  //   return {cartItems:newCartItems,totalPrice:Total,itemsCount:ResultItems}
  // }

  
  // cart Drop Dowen functionality by use reduce
  const setIsDropped = () => dispatch({ type: Actions.TogglingCart });

  // cartitems functionality by use reduce
  const plusMinusHandler = (action, id) => {
    dispatch({
      type: Actions.plusMinus,
      payload: IncriAndDecriQuantity(action, id, cartItems),
    });
  };

  const removeItem = (id) => {
    dispatch({ type: Actions.removingItem, payload: id });
    // dispatch({ type: "update cart", payload:updateCartReducer(removingItems(id,cartItems))})
  };

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: Actions.addingTheCart,
      payload: AddCartItem(cartItems, productToAdd),
    });
  };

  const value = {
    isDropped,
    setIsDropped,
    cartItems,
    addItemToCart,
    plusMinusHandler,
    removeItem,
    itemsCount,
    totalPrice,
  };
  return <CartStorage.Provider value={value}>{children}</CartStorage.Provider>;
};
