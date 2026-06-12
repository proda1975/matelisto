import { useEffect, useState } from "react";
import { seedDatabase } from "../../services/seedData";

export const SeedButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setLoading(true);
    setMessage("Cargando datos...");
    
    const success = await seedDatabase();
    
    if (success) {
      setMessage("✅ Datos cargados correctamente. Recarga la página.");
    } else {
      setMessage("❌ Error al cargar los datos");
    }
    
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", margin: "20px 0" }}>
      <button 
        onClick={handleSeed} 
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "16px"
        }}
      >
        {loading ? "Cargando..." : "Cargar Productos de Prueba"}
      </button>
      {message && <p style={{ marginTop: "10px", fontSize: "14px" }}>{message}</p>}
    </div>
  );
};
