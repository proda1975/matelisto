import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../services/productService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //CON LA API FAKESTORE
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // Con Firestore: obtener productos desde la colección 'products'
  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
        const categoryList = Array.from(
          new Set(data.map((product) => product.category).filter(Boolean))
        );
        setCategories(["all", ...categoryList]);
      })
      .catch((err) => {
        console.log("Hubo un error:", err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "all") {
      setProducts(allProducts);
      return;
    }

    setLoading(true);
    setError(null);

    getProductsByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log("Hubo un error al filtrar:", err);
        setError("No se pudieron cargar los productos de esa categoría.");
      })
      .finally(() => setLoading(false));
  };

  console.log(products, selectedCategory);

  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  // const arrayProducts = [
  //   { id: 0, name: "Producto 1", description: "Descripcion 1", price: 123 },
  //   { id: 1, name: "Producto 2", description: "Descripcion 2", price: 456 },
  //   { id: 2, name: "Producto 3", description: "Descripcion 3", price: 789 },
  // ];

  //SIMULACION PROVISORIA de traer productos
  // const getProducts = () => {
  //   setProducts(arrayProducts);
  // };

  // const clearProducts = () => {
  //   setProducts([]);
  // };

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <div className="filter-bar">
        <label htmlFor="category-select">Filtrar por categoría:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category === "all" ? "Todas" : category}
            </option>
          ))}
        </select>
      </div>

      {error ? <p className="error-message">{error}</p> : <ItemList products={products} />}
    </section>
  );
};
