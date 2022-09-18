import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  let toCheckout = () => {
    console.log("clicked");
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={toCheckout}>go to checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
