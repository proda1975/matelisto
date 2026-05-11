import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Count } from "./components/Count/Count";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
