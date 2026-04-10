import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BrandProducts from "./Pages/BrandProducts";
import Navbar from "./Component/Navbar";
import CategoryProducts from "./Pages/CategoryProducts";
import ProductDetail from "./Pages/ProductDetails";
import SearchResults from "./Pages/SearchResults";

import CartDrawer from "./Component/CartDrawer"; // ✅ NEW

function App() {
  return (
    <div>

      <Navbar />

      {/* ✅ RIGHT SIDE CART */}
      <CartDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brandName" element={<BrandProducts />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>

    </div>
  );
}

export default App;