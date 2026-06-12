import { useCart } from "../../contexts/CartContext";

export const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <div className="cart-item-controls">
          <button
            className="btn secondary"
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>Cantidad: {item.quantity}</span>
          <button
            className="btn secondary"
            onClick={() => updateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
        <button className="btn danger" onClick={() => removeFromCart(item.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};
