import Button from "../button/button.component";
import { useContext } from "react";
import { CartStorage } from "../../contexts/cart.context";

const CheckOutItems = ({ item: { name, imageUrl, price, quantity,id } }) => {
    const {plusMinusHandler,removeItem} = useContext(CartStorage)
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
      <Button buttonType="inverted"
        children={"X"}
        onClick={removeFromCartItem}/>
    </div>
  );
};

export default CheckOutItems;
