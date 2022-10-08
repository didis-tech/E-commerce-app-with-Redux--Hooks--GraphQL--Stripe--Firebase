import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CancelToggle,
  CartDropdownContainer,
  CartItems,
  CartOverlay,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  let toCheckout = () => {
    console.log("clicked");
    navigate("/checkout");
  };
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <>
      <CartDropdownContainer>
        <CancelToggle onClick={toggleIsCartOpen}>&#10005;</CancelToggle>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
          ) : (
            <EmptyMessage>Cart is Empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={toCheckout}>go to checkout</Button>
      </CartDropdownContainer>
      <CartOverlay onClick={toggleIsCartOpen} />
    </>
  );
};

export default CartDropdown;
