import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));
};

export default Directory;
