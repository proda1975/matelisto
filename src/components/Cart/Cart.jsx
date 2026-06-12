import { useCart } from "../../contexts/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <CartList items={cartItems} />
          <CartSummary onClear={clearCart} />
        </>
      )}
    </div>
  );
};