// src/Pages/AllProducts.jsx
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function AllProducts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5e4636] mb-12">
        All Hijab Styles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white border border-[#e2d5cb] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#5e4636]">
                  {product.name}
                </h3>
                <p className="text-[#7f5f4c] text-sm">{product.description}</p>
                <StarRating rating={product.rating} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
