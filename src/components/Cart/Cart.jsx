import { useCart } from "../../contexts/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

const EmptyCart = () => <p>El carrito está vacío</p>;

const CartContent = ({ items, onClear }) => (
  <>
    <CartList items={items} />
    <CartSummary onClear={onClear} />
  </>
);

export const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? <EmptyCart /> : <CartContent items={cartItems} onClear={clearCart} />}
    </div>
  );
};