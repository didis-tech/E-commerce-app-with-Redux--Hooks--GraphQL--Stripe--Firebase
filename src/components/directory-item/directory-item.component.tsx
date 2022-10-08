import { FC } from "react";
import {
  DirectoryItemBackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
  DirectoryItemDetail,
} from "./directory-item.styles";

type Category = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

type DirectoryItemProp = {
  category: Category;
};

const DirectoryItem: FC<DirectoryItemProp> = ({ category }) => {
  const { title, id, imageUrl, route } = category;
  return (
    <DirectoryItemContainer key={id}>
      <DirectoryItemBackgroundImage
        imageUrl={imageUrl}
      ></DirectoryItemBackgroundImage>
      <DirectoryItemBody to={`${route}`}>
        <DirectoryItemDetail>
          <h2>{title} </h2>
          <p>Shop Now</p>
        </DirectoryItemDetail>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
