import { useContext } from 'react';
import {ProductCardContainer, Name, Price, Footer} from'./product-card.styles';
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemsToCart}= useContext(CartContext)

  const addProductToCart = ()=> addItemsToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;