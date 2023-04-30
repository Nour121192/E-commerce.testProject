import {CartDropdownContainer,EmptyMessage,CartItemsContainer} from"./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartStorage } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdowen = () => {
  const { cartItems } = useContext(CartStorage);

  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>You Cart Is Empty</EmptyMessage>
        )}
      </CartItemsContainer>
      
        <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
      
    </CartDropdownContainer>
  );
};

export default CartDropdowen;
