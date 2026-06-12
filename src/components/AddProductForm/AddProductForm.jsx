import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "./AddProductForm.css";

export const AddProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "mates"
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (!formData.name || !formData.price || !formData.stock || !formData.image) {
        throw new Error("Por favor completa todos los campos");
      }

      const newProduct = {
        name: formData.name,
        title: formData.name,
        description: formData.description,
        subtitle: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        image: formData.image,
        category: formData.category,
        type: formData.category,
        createdAt: new Date()
      };

      const productsCollection = collection(db, "products");
      await addDoc(productsCollection, newProduct);

      setMessage("✅ Mate agregado exitosamente");
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        category: "mates"
      });

      setTimeout(() => {
        setMessage("");
        onProductAdded?.();
      }, 2000);
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-container">
      <button
        className="toggle-form-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cerrar formulario" : "➕ Agregar Mate"}
      </button>

      {showForm && (
        <form className="add-product-form" onSubmit={handleSubmit}>
          <h3>Agregar nuevo mate</h3>

          <div className="form-group">
            <label htmlFor="name">Nombre del mate *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Mate de calabaza"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe el mate..."
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Precio ($) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="stock">Stock (cantidad) *</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
                min="0"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">URL de la imagen *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              required
            />
            {formData.image && (
              <div className="image-preview">
                <p>Preview:</p>
                <img src={formData.image} alt="Preview" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Agregando..." : "Agregar Mate"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      )}
    </div>
  );
};
