import styled from "styled-components";
import { sizes } from "../directory-item/directory-item.styles";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const SignUpH2 = styled.h2`
  margin: 10px 0;
`;
export const SignUpButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${sizes.mobileL}), {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
