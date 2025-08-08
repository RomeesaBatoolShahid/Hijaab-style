import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart.length;
  });

  return (
    <header className="bg-[#e6d3c6] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-[#5e4636]">Hijab Gallery</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-[#5e4636] text-sm sm:text-base">
          <NavLink to="/" className="hover:text-[#7f5f4c] transition">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#7f5f4c] transition">Styles</NavLink>
          <NavLink to="/reviews" className="hover:text-[#7f5f4c] transition">Reviews</NavLink>
          <NavLink to="/cart" className="relative hover:text-[#7f5f4c] transition">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/auth"
            className="bg-[#5e4636] hover:bg-[#7f5f4c] text-white px-4 py-2 rounded-full transition"
          >
            Login
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#5e4636] transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e6d3c6] px-6 py-4 space-y-4 text-[#5e4636]">
          <NavLink to="/" className="block hover:text-[#7f5f4c]">Home</NavLink>
          <NavLink to="/products" className="block hover:text-[#7f5f4c]">Styles</NavLink>
          <NavLink to="/reviews" className="block hover:text-[#7f5f4c]">Reviews</NavLink>
          <NavLink to="/cart" className="block hover:text-[#7f5f4c] relative">
            <ShoppingCart className="inline" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )} Cart
          </NavLink>
          <NavLink
            to="/auth"
            className="bg-[#5e4636] hover:bg-[#7f5f4c] text-white px-4 py-2 rounded-full w-full block text-center"
          >
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
