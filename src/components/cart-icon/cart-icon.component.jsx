import { ReactComponent as ShoppingBag } from "../../assests/shopping-bag.svg";
import './cart-icon.styles.scss'
import { CartStorage } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
const {setIsDropped,isDropped,itemsCount} = useContext(CartStorage)
    
    const cart_dropdowen_handler = () => {
        setIsDropped()
        }
    return(
        <div className="cart-icon-container" onClick={cart_dropdowen_handler}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

export default CartIcon
