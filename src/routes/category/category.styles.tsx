import styled from "styled-components";
import {
  devices,
  sizes,
} from "../../components/directory-item/directory-item.styles";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: ${sizes.mobileM}), {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobileM} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media ${devices.laptopL} {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
