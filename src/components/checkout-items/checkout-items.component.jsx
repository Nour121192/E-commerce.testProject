import Button,{Button_Types} from "../button/button.component";
// import { useContext } from "react";
// import { CartStorage } from "../../contexts/cart.context";
import { useCartItems } from "../../store/cart/cart.selection";

const CheckOutItems = ({ item: { name, imageUrl, price, quantity,id } }) => {
    const {plusMinusHandler,removeItem} = useCartItems()
    const incriment = () => plusMinusHandler("plus",id)
    const decriment = () => plusMinusHandler("minus",id)
    const removeFromCartItem = () => removeItem(id)

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="decriment" onClick={decriment}>{`< `}</span>
        {quantity}
        <span className="increment" onClick={incriment}>{` >`}</span>
      </div>
      <span className="price">{price}</span>
      <Button buttonType={Button_Types.inverted}
        children={"X"}
        onClick={removeFromCartItem}/>
    </div>
  );
};

export default CheckOutItems;
