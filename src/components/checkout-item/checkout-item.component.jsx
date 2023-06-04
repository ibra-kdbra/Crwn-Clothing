import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import {CheckOutItemContainer, ImageContainer, BaseSpan, Quantity, Value, Arrow, RemoveButton} from'./checkout-item.styles'

const CheckOutItem =({cartItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart,addItemsToCart, removeItemsToCart } =useContext(CartContext);
    const clearItemHandler =()=>clearItemFromCart(cartItem);
    const addItemHandler =()=>addItemsToCart(cartItem);
    const removeItemHandler =()=>removeItemsToCart(cartItem);
    return(
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                    </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                    </Arrow>
                </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

        </CheckOutItemContainer>
    );
};

export default  CheckOutItem;

