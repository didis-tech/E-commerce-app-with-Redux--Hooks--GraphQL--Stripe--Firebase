import { Link } from "react-router-dom";
import styled from "styled-components";

import { devices, sizes } from "../directory-item/directory-item.styles";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

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
