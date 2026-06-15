import { useCart } from "../../contexts/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! Estamos procesando tu pedido.");
    // Aquí se integraría la lógica para guardar la orden en Firebase
  };

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <CartList items={cartItems} />
          <CartSummary onClear={clearCart} />
          <div className="checkout-container">
            <button className="btn" onClick={handleCheckout}>Finalizar Compra / Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};