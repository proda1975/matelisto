import { CartItem } from "./CartItem";

export const CartList = ({ items }) => {
  return (
    <div className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
