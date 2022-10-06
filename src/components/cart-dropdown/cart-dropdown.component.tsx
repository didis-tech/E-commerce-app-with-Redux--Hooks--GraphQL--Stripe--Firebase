import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
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
