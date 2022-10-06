import styled from "styled-components";
import { sizes } from "../../components/directory-item/directory-item.styles";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: ${sizes.tablet}), {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
