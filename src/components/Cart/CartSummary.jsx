import { useCart } from "../../contexts/CartContext";

export const CartSummary = ({ onClear }) => {
  const { getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="cart-summary">
      <p>Total de items: {getTotalItems()}</p>
      <p>Total a pagar: ${getTotalPrice()}</p>
      <button className="btn primary" onClick={onClear}>
        Vaciar carrito
      </button>
    </div>
  );
};
