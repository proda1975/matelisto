import { Item } from "../Item/Item";
import { useCart } from "../../contexts/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item, onDelete, deleting }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.name} agregado al carrito`);
  };

  return (
    <Item {...item}>
      <div className="item-detail-buttons">
        <button className="btn primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        {onDelete && (
          <button 
            className="btn danger" 
            onClick={onDelete}
            disabled={deleting}
          >
            {deleting ? "Eliminando..." : "Eliminar"}
          </button>
        )}
      </div>
    </Item>
  );
};
