import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {
    name: "Mate de Cerámica",
    description: "Mate tradicional de cerámica con acabado artesanal",
    price: 25,
    image: "https://via.placeholder.com/300?text=Mate+Ceramica",
    category: "mates",
  },
  {
    name: "Mate de Madera",
    description: "Mate de palo santo pulido",
    price: 35,
    image: "https://via.placeholder.com/300?text=Mate+Madera",
    category: "mates",
  },
  {
    name: "Bombilla de Plata",
    description: "Bombilla tradicional de plata 950",
    price: 45,
    image: "https://via.placeholder.com/300?text=Bombilla",
    category: "accesorios",
  },
  {
    name: "Termo Stanley",
    description: "Termo para agua caliente 1 litro",
    price: 55,
    image: "https://via.placeholder.com/300?text=Termo",
    category: "accesorios",
  },
  {
    name: "Yerba Mate Premium",
    description: "Yerba de primera selección con hierbas",
    price: 15,
    image: "https://via.placeholder.com/300?text=Yerba",
    category: "yerba",
  },
];

async function seedFirestore() {
  try {
    console.log("📦 Iniciando poblado de Firestore...");
    const col = collection(db, "products");

    for (const product of products) {
      const docRef = await addDoc(col, product);
      console.log(`✅ Producto creado: ${product.name} (ID: ${docRef.id})`);
    }

    console.log("🎉 ¡Todos los productos fueron creados!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seedFirestore();
