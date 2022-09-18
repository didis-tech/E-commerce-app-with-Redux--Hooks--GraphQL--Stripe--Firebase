import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutTotal,
} from "./checkout.styles.jsx";
function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <CheckoutTotal>Total: ${cartTotal} </CheckoutTotal>
    </CheckoutContainer>
  );
}

export default Checkout;
