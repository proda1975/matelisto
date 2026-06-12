import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/productService";
import "./DeleteProductForm.css";

export const DeleteProductForm = ({ onProductDeleted }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showList, setShowList] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setMessage("❌ Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    if (showList) {
      loadProducts();
    }
  }, [showList]);

  const handleDelete = async (id, name) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${name}"?`)) {
      try {
        setDeletingId(id);
        await deleteProduct(id);
        setMessage("✅ Producto eliminado exitosamente");
        setProducts(products.filter((p) => p.id !== id));

        setTimeout(() => {
          setMessage("");
          onProductDeleted?.();
        }, 2000);
      } catch (error) {
        setMessage(`❌ Error: ${error.message}`);
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="delete-product-container">
      <button
        className="toggle-delete-btn"
        onClick={() => setShowList(!showList)}
      >
        {showList ? "Cerrar lista" : "🗑️ Eliminar Mate"}
      </button>

      {showList && (
        <div className="delete-product-section">
          <h3>Lista de Mates</h3>

          {loading && <p className="loading">Cargando productos...</p>}

          {!loading && products.length === 0 && (
            <p className="no-products">No hay productos para eliminar</p>
          )}

          {!loading && products.length > 0 && (
            <div className="products-list">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <div className="product-info">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-thumbnail"
                    />
                    <div className="product-details">
                      <h4>{product.name}</h4>
                      <p className="product-price">${product.price}</p>
                      <p className="product-stock">Stock: {product.stock || 0}</p>
                    </div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id, product.name)}
                    disabled={deletingId === product.id}
                  >
                    {deletingId === product.id ? "Eliminando..." : "Eliminar"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {message && <p className="form-message">{message}</p>}
        </div>
      )}
    </div>
  );
};
