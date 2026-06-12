import { SeedButton } from "../SeedButton/SeedButton";
import { AddProductForm } from "../AddProductForm/AddProductForm";
import { DeleteProductForm } from "../DeleteProductForm/DeleteProductForm";
import "./ABM.css";

export const ABM = ({ onProductAdded }) => {
  const handleProductAdded = () => {
    onProductAdded?.();
  };

  return (
    <section className="abm-container">
      <div className="abm-content">
        <h1>Administración de Productos</h1>
        <p className="abm-subtitle">Cargar datos de prueba, agregar nuevos mates o eliminar productos</p>

        <div className="abm-section">
          <h2>Cargar Datos de Prueba</h2>
          <p>Carga 6 mates de ejemplo en la base de datos</p>
          <SeedButton />
        </div>

        <hr className="abm-divider" />

        <div className="abm-section">
          <h2>Agregar Mate Manualmente</h2>
          <p>Agrega nuevos mates con información personalizada</p>
          <AddProductForm onProductAdded={handleProductAdded} />
        </div>

        <hr className="abm-divider" />

        <div className="abm-section">
          <h2>Eliminar Mate</h2>
          <p>Elimina mates de la base de datos</p>
          <DeleteProductForm onProductDeleted={handleProductAdded} />
        </div>
      </div>
    </section>
  );
};
