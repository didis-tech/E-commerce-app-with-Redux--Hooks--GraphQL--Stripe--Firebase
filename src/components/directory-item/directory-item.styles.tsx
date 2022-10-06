import styled from "styled-components";
import { Link } from "react-router-dom";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
type DirectoryItemBackgroundImageProp = {
  imageUrl: string;
};
export const DirectoryItemBackgroundImage = styled.div<DirectoryItemBackgroundImageProp>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const DirectoryItemBody = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.25);
  // opacity: 0.1;
  position: absolute;
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${sizes.laptop}), {
    min-width: 30%;
  }
  @media (max-width: ${sizes.tablet}), {
    min-width: 60%;
  }
  @media (max-width: ${sizes.mobileL}), {
    min-width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover ${DirectoryItemBackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  &:hover ${DirectoryItemBody} {
    opacity: 1;
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:last-child ${DirectoryItemBody} {
    background-color: rgba(0, 15, 255, 0.25);
    color: #fff;
    h2 {
      color: #fff;
    }
  }
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }

  &:nth-child(4) ${DirectoryItemBody} {
    background-color: rgba(244, 54, 166, 0.25);
    color: #fff;
    h2 {
      color: #fff;
    }
  }
  &:nth-child(3) ${DirectoryItemBody} {
    background-color: rgba(255, 255, 0, 0.25);
    color: #000;
    h2 {
      color: #000;
    }
  }
`;
