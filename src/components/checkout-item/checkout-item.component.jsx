import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutArrow,
  CheckoutImageContainer,
  CheckoutImg,
  CheckoutItemContainer,
  CheckoutName,
  CheckoutPrice,
  CheckoutQuantity,
  CheckoutRemoveButton,
  CheckoutValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemFromCart, decreaseItemQuanity, addItemToCart } =
    useContext(CartContext);
  const increaseQuantity = () => addItemToCart(cartItem);
  const reduceQuantity = () => decreaseItemQuanity(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImg src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>

      <CheckoutName>{name}</CheckoutName>

      <CheckoutQuantity>
        <CheckoutArrow onClick={reduceQuantity}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={increaseQuantity}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>

      <CheckoutPrice>${price}</CheckoutPrice>

      <CheckoutRemoveButton onClick={removeItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
