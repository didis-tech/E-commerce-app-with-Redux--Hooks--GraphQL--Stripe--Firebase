import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decreaseItemQuanity,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemProp } from "../cart-item/cart-item.component";
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

const CheckoutItem = ({ cartItem }: CartItemProp) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const increaseQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
  const reduceQuantity = () =>
    dispatch(decreaseItemQuanity(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
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
