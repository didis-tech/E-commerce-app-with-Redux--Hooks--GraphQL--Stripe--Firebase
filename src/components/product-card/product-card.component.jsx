import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import {
  ProductCardPrice,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardImg,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { price, imageUrl, name } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice className="price">{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
