import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById, deleteProduct } from "../../services/productService";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then((product) => setItemDetail(product))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${itemDetail.name}"?`)) {
      try {
        setDeleting(true);
        await deleteProduct(id);
        alert("✅ Producto eliminado exitosamente");
        navigate("/");
      } catch (error) {
        alert("❌ Error al eliminar el producto");
        console.error(error);
        setDeleting(false);
      }
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} itemId={id} onDelete={handleDelete} deleting={deleting} />
      </div>
    </section>
  );
};
