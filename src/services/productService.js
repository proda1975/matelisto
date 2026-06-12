import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const normalizeProduct = (snapshot) => {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    name: data.name || data.title || "",
    description: data.description || data.subtitle || "",
    price: data.price || 0,
    image: data.image || data.images?.[0] || "",
    category: data.category || data.type || "",
    ...data,
  };
};

export const getProducts = async () => {
  const col = collection(db, "products");
  const snapshot = await getDocs(col);
  return snapshot.docs.map(normalizeProduct);
};

export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) throw new Error("Producto no encontrado");
  return normalizeProduct(snapshot);
};

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(normalizeProduct);
};
