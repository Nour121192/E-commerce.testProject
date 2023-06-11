import { ReactComponent as ShoppingBag } from "../../assests/shopping-bag.svg";
import './cart-icon.styles.scss'
// import { CartStorage } from "../../contexts/cart.context";
// import { useContext } from "react";

import { useCartItems } from "../../store/cart/cart.selection";


const CartIcon = () => {
    
    const {isDropped , setDropped, itemsCount } = useCartItems()
    
// const {itemsCount} = useContext(CartStorage)
    const cart_dropdowen_handler = () => {
        console.log(isDropped)
        // dispatch({
        //     type: cart_types.cartItemsAndIsDropped,
        //     payload:{isDropped:!isDropped}
        //   })
    //    const iif = (()=> dispatch)()
    setDropped(!isDropped)
        }
    return(
        <div className="cart-icon-container" onClick={cart_dropdowen_handler}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

export default CartIcon
