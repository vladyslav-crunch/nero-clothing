import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
} from "./cart-item.styles";

import { CartItem as CartItemType } from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
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
