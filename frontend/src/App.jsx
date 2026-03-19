import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import { getItemTotal } from "./utils/cart";

function App() {
  // ── initialise from localStorage so cart survives refresh ──
  const [inCart, setInCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);

  // ── always guard against non-array before reduce ──
  const safeCart = Array.isArray(inCart) ? inCart : [];
  const subtotal = safeCart.reduce((acc, item) => acc + getItemTotal(item), 0);

  // ── sync cart to localStorage on every change ──
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(safeCart));
  }, [inCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              inCart={safeCart}
              setInCart={setInCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              subtotal={subtotal}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              inCart={safeCart}
              setInCart={setInCart}
              subtotal={subtotal}
              setCartOpen={setCartOpen}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
