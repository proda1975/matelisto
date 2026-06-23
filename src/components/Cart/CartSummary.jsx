import { useCart } from "../../contexts/CartContext";

export const CartSummary = ({ onClear }) => {
  const { getTotalItems, getTotalPrice, cartItems } = useCart();

  const handleFinishPurchase = () => {
    console.log("Finalizando la compra con los siguientes items:", cartItems);
    // Aquí iría la lógica para crear la orden en Firebase, por ejemplo.
    alert("¡Gracias por tu compra!");
    onClear(); // Opcional: vaciar el carrito después de la compra.
  };

  return (
    <div className="cart-summary">
      <p>Total de items: {getTotalItems()}</p>
      <p>Total a pagar: ${getTotalPrice()}</p>
      <div className="cart-summary-buttons">
        <button className="btn" onClick={onClear}>
          Vaciar carrito
        </button>
        <button className="btn primary" onClick={handleFinishPurchase}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};