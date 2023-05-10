import { useContext } from "react"
import { CartStorage } from "../../contexts/cart.context"
import CheckOutItems from "../../components/checkout-items/checkout-items.component"


const CheckoutPage = () => {
    const {cartItems,totalPrice} =  useContext(CartStorage)
    return(
        <div className="check-out-container">
            {cartItems.map((item)=><CheckOutItems item={item} key={item.id}/>)}
            <span>{totalPrice}</span>
        </div>
    )
}

export default CheckoutPage