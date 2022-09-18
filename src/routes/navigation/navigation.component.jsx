import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt="logo" className="logo" width={50} />
        </LogoContainer>

        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
