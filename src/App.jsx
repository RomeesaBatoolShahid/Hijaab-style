import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NAvbar.jsx";
import Hero from "./Components/HeroSection.jsx";
import FeaturedProducts from "./Components/FeaturedProducts.jsx";
import Footer from "./Components/Footer.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import AllProducts from "./Pages/AllProducts.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Cart from "./pages/cart.jsx";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
            </>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/products" element={<AllProducts />} />
         <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/cart" element={<Cart />} />


        {/* Add more routes here if needed */}
      </Routes>

      <Footer />
    </>
  );
}
