import "./product-card.styles.scss";
import Button from "../../components/button/button.component";

import { CartStorage } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductsCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartStorage);

  const addCartItem = () => addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>

      <Button
        buttonType="inverted"
        children={"Add To Cart"}
        onClick={addCartItem}
      />
    </div>
  );

  // const addCartItem = (event) => {
  //   console.log(event.target);
  //   console.log({ ...product });
  //   console.log(cartItems);

  //   console.log(cartItems.length);
  //   let quantity = 0;
  //   // console.log(product)
  //   console.log(cartItems);
  //   cartItems.map((item) => {
  //     if (!cartItems.some((el) => el)) {
  //       quantity++;
  //       setCartItems([{ ...product, number: quantity }]);
  //       console.log("mt");
  //     } else if (item.id !== event.target.id) {
  //       setCartItems([...cartItems, { ...product , number:1}]);
  //       console.log("!id");
  //     } else {
  //       quantity++;
  //       setCartItems([...cartItems,{ ...item, number: quantity }]);

  //       console.log(item);

  //       console.log("F");
  //     }
  //     console.log(cartItems);
  //     return cartItems;
  //   });
  // };


};

export default ProductsCard;
