import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  font-size: 18px;
  padding-bottom: 10px;

  overflow: hidden;

  @media (min-width: 800px) {
    padding-bottom: 0;
    height: 60px;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const NavOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

type NavLinksProps = {
  display: string;
};

export const NavLinks = styled.div<NavLinksProps>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
  @media (max-width: 800px) {
    // display: ${({ display }) => `${display}`};
    overflow: hidden;
    position: absolute;
    top: 0;
    right: -5px;
    justify-content: flex-start;
    z-index: 2;
    background: white;
    height: ${({ display }) => `${display === "none" ? "0%" : "100%"}`};
    width: ${({ display }) => `${display === "none" ? "0%" : "200px"}`};
    padding-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.5s ease;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoContainer = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-top: 5px;
  margin-left: 20px;

  @media (max-width: 800px) {
    padding: 0px 0px;
    width: 50px;
    // margin-top: 0;
  }
`;
export const CancelToggle = styled(NavLink)`
  display: inline-block;
  align-self: flex-end;
  font-size: 15px;
  margin-top: 10px;
  margin-right: 20px;
  background-color: black;
  color: white;
  border-radius: 50%;

  &:hover {
    background-color: #bebdbd;
    color: black;
  }
`;
export const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  display: inline-block;
  font-size: 22px;
  margin-top: 15px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;
export const Hamburger = styled.img`
  /* add your menu icon here i.e. */
  /* content: url('../static/Hamburger_icon.svg'); */
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  @media (min-width: 800px) {
    display: none;
  }
`;
