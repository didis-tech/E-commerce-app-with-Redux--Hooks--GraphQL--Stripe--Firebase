import { memo, FC } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.types";
import {
  CartItemContainer,
  CartItemName,
  CartItemImg,
  CartItemDetails,
} from "./cart-item.styles";

export type CartItemProp = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProp> = memo(({ cartItem }) => {
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
});

export default CartItem;
