import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
