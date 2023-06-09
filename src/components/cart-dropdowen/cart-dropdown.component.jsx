import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartStorage } from "../../contexts/cart.context";
import { Link } from "react-router-dom";


const CartDropdowen = () => {
const {cartItems} = useContext(CartStorage)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map((item)=> <CartItem cartItem={item} key={item.id}/>)}
      </div>
      <Link to="/checkout"><Button>Go To Checkout</Button></Link>
    </div>
  );
};

export default CartDropdowen