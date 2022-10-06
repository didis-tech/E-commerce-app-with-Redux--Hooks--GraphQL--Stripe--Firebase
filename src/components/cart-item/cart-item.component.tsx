import { CartItem } from "../../store/cart/cart.types";
import {
  CartItemContainer,
  CartItemName,
  CartItemImg,
  CartItemDetails,
} from "./cart-item.styles";

export type CartItemProp = {
  cartItem: CartItem;
};

const CartItem = ({ cartItem }: CartItemProp) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
