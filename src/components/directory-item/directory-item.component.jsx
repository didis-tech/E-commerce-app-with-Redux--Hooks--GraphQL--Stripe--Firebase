import { Link } from "react-router-dom";
import {
  DirectoryItemBackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, id, imageUrl, route } = category;
  return (
    <DirectoryItemContainer key={id}>
      <DirectoryItemBackgroundImage
        imageUrl={imageUrl}
      ></DirectoryItemBackgroundImage>
      <DirectoryItemBody to={`${route}`}>
        <h2>{title} </h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
