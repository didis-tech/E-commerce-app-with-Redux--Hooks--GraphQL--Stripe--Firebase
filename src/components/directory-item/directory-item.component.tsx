import {
  DirectoryItemBackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
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

const DirectoryItem = ({ category }: DirectoryItemProp) => {
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
