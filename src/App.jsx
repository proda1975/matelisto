import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { ABM } from "./components/ABM/ABM";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Login } from "./contexts/Login";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  const handleProductAdded = () => {
    window.location.reload();
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Navigate to="/abm" />} />
            <Route
              path="/abm"
              element={
                <ProtectedRoute>
                  <ABM onProductAdded={handleProductAdded} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
