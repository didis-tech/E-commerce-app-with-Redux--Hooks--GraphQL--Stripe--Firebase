import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media (max-width: 800px) {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: -5px;
    justify-content: flex-start;
    height: 100%;
    // width: 50%;
    background: white;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.5s ease;
  }
`;

export const CancelToggle = styled.span`
  display: none;
  align-self: flex-end;
  font-size: 15px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 20px;
  margin-right: 10px;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #bebdbd;
    color: black;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media (max-width: 800px) {
    height: 80%;
  }
`;

export const CartOverlay = styled.div`
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
