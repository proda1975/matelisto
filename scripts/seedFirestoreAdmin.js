const admin = require("firebase-admin");

// Cloud Shell ya tiene credenciales configuradas
admin.initializeApp({
  projectId: "matelisto-a4a6d",
});

const db = admin.firestore();

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
    const col = db.collection("products");

    for (const product of products) {
      const docRef = await col.add(product);
      console.log(`✅ Producto creado: ${product.name} (ID: ${docRef.id})`);
    }

    console.log("🎉 ¡Todos los productos fueron creados!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

seedFirestore();
