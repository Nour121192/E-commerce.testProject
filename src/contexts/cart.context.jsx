import { useState, createContext, useReducer } from "react";

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

const IncriAndDecriQuantity = (action, id,cartItems) => {
  const cartItemsClone = [] 
 cartItems.forEach((item,index) => {
    console.log("ss")
    if (item.id === id) {
      if (action === "plus") {
        cartItemsClone.push({ ...item, quantity: item.quantity + 1 })
        // return { ...item, quantity: item.quantity + 1 };

      }  else if (action === "minus" && item.quantity === 1){


      } else if (action === "minus" && item.quantity > 1) {
        cartItemsClone.push({ ...item, quantity: item.quantity - 1 })
        // return { ...item, quantity: item.quantity - 1 };
      }
     
    }else {
      cartItemsClone.push(item)
    }
     
     
  });
  console.log(cartItemsClone)
  return cartItemsClone
};

const removingItems = (id,cartItems)=> {
  return cartItems.filter((item)=> item.id !== id)
}

const reducer = (state,action) => {
  const {isDropped} = state
  switch(action.type){
    case "toggle":
      return {isDropped:!isDropped}
    default:
      throw console.error(action.type);
  }

}

export const CartProvider = ({ children }) => {
  // const [isDropped, setIsDropped] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [{isDropped},dispatch] = useReducer(reducer,{isDropped:false})
  const setIsDropped = ()=> dispatch({type:isDropped})

  const plusMinusHandler = (action,id) => {
   setCartItems(IncriAndDecriQuantity(action,id,cartItems))
  }
  const removeItem = (id)=> {
    setCartItems(removingItems(id,cartItems))
  }

  const addItemToCart = (productToAdd) => {
    setCartItems(AddCartItem(cartItems, productToAdd));
  };
  const value = {
    isDropped,
    setIsDropped,
    cartItems,
    addItemToCart,
    plusMinusHandler,
    removeItem
  };
  return <CartStorage.Provider value={value}>{children}</CartStorage.Provider>;
};
