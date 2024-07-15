import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
} from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
