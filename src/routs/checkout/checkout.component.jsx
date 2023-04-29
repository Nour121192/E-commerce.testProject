import { useContext } from "react"
import { CartStorage } from "../../contexts/cart.context"
import CheckOutItems from "../../components/checkout-items/checkout-items.component"


const CheckoutPage = () => {
    const {cartItems} =  useContext(CartStorage)
    return(
        <div className="check-out-container">
            {cartItems.map((item)=><CheckOutItems item={item} key={item.id}/>)}
            <span>{cartItems.reduce((perv,curr) => {return perv + (curr.price*curr.quantity)},0 )}</span>
        </div>
    )
}

export default CheckoutPage