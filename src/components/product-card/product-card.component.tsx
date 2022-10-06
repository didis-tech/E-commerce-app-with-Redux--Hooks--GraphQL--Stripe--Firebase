import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import { CategoryItem } from "../../store/categories/categories.types";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardPrice,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardImg,
} from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { price, imageUrl, name } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productToAdd: CartItem = { ...product, quantity: 1 };
  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, productToAdd));
  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice className="price">{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
