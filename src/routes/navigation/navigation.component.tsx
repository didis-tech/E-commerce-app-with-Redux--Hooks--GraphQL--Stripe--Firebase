import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  CancelToggle,
  Hamburger,
  LogoContainer,
  NavBarToggle,
  NavigationContainer,
  NavLink,
  NavLinks,
  NavOverlay,
} from "./navigation.styles";

const Navigation = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => dispatch(signOutStart());

  const toggleNavBar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <>
      <NavigationContainer>
        <NavBarToggle onClick={() => toggleNavBar()}>
          <Hamburger />
        </NavBarToggle>
        <LogoContainer to="/">
          <img
            src={"/assets/img/logo.png"}
            alt="logo"
            className="logo"
            width={50}
          />
        </LogoContainer>

        <NavLinks
          className="nav-links-container"
          display={isNavbarOpen ? "flex" : "none"}
        >
          <CancelToggle
            as="span"
            className="nav-link"
            onClick={toggleNavBar}
            style={{
              display: isNavbarOpen ? "flex" : "none",
            }}
          >
            &#10005;
          </CancelToggle>
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
        <NavOverlay
          style={{
            display: isNavbarOpen ? "flex" : "none",
          }}
          onClick={toggleNavBar}
        />
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
