import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const sampleProducts = [
  {
    name: "Mate de Calabaza Tradicional",
    title: "Mate de Calabaza Tradicional",
    description: "Mate hecho a mano con calabaza secada al sol. Perfecto para comenzar",
    subtitle: "Clásico mate de calabaza",
    price: 450.00,
    stock: 15,
    image: "https://images.unsplash.com/photo-1576092160550-2173dba999ef?w=500",
    category: "mates",
    type: "mates"
  },
  {
    name: "Mate de Madera Pulida",
    title: "Mate de Madera Pulida",
    description: "Mate elaborado con madera de quebracho. Muy resistente y duradero",
    subtitle: "Mate de madera premium",
    price: 650.00,
    stock: 8,
    image: "https://images.unsplash.com/photo-1578760494508-ae4147f9f05e?w=500",
    category: "mates",
    type: "mates"
  },
  {
    name: "Mate de Cerámica Vidriada",
    title: "Mate de Cerámica Vidriada",
    description: "Mate de cerámica artesanal con vidriado resistente. Modelo moderno",
    subtitle: "Mate de cerámica vidriada",
    price: 380.00,
    stock: 20,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500",
    category: "mates",
    type: "mates"
  },
  {
    name: "Mate de Metal Plateado",
    title: "Mate de Metal Plateado",
    description: "Mate metálico con acabado plateado. Muy elegante y fácil de limpiar",
    subtitle: "Mate de metal plateado",
    price: 520.00,
    stock: 12,
    image: "https://images.unsplash.com/photo-1578934360867-54bdb681ba59?w=500",
    category: "mates",
    type: "mates"
  },
  {
    name: "Mate Cubilete Premium",
    title: "Mate Cubilete Premium",
    description: "Mate tipo cubilete con diseño sofisticado. Incluye protección térmica",
    subtitle: "Mate cubilete premium",
    price: 890.00,
    stock: 5,
    image: "https://images.unsplash.com/photo-1578759688326-653fc221d474?w=500",
    category: "mates",
    type: "mates"
  },
  {
    name: "Mate Galleta Artesanal",
    title: "Mate Galleta Artesanal",
    description: "Mate de diseño galleta hecho a mano. Muy original y funcional",
    subtitle: "Mate galleta artesanal",
    price: 320.00,
    stock: 18,
    image: "https://images.unsplash.com/photo-1578789253240-ca594f45b52b?w=500",
    category: "mates",
    type: "mates"
  }
];

export const seedDatabase = async () => {
  try {
    const productsCollection = collection(db, "products");
    
    for (const product of sampleProducts) {
      await addDoc(productsCollection, product);
      console.log(`Producto agregado: ${product.name}`);
    }
    
    console.log("✅ Base de datos poblada exitosamente");
    return true;
  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error);
    return false;
  }
};
