import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemFromCart, decreaseItemQuanity, addItemToCart } =
    useContext(CartContext);
  const increaseQuantity = () => addItemToCart(cartItem);
  const reduceQuantity = () => decreaseItemQuanity(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>

      <div className="quantity">
        <a href="#!" className="arrow" onClick={reduceQuantity}>
          &#10094;
        </a>
        <span className="value">{quantity}</span>
        <a href="#!" className="arrow" onClick={increaseQuantity}>
          &#10095;
        </a>
      </div>

      <span className="price">${price}</span>

      <a href="#!" className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </a>
    </div>
  );
};

export default CheckoutItem;
