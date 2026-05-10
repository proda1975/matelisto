import { useCart } from "../../contexts/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total de items: {getTotalItems()}</p>
            <p>Total a pagar: ${getTotalPrice()}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};