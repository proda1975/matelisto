import { Item } from "../Item/Item";
import { useCart } from "../../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.name} agregado al carrito`);
  };

  return (
    <Item {...item}>
      <button className="btn primary" onClick={handleAddToCart}>Agregar al carrito</button>
    </Item>
  );
};
