// src/Components/FeaturedProducts.jsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/products";

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

function FeaturedProducts() {
  return (
    <section className="bg-[#fefaf6] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#5e4636] mb-12">
          Featured Hijab Styles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.slice(0, 3).map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-[#e2d5cb]"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-[#5e4636]">
                    {product.name}
                  </h3>
                  <p className="text-[#7f5f4c] text-sm">{product.description}</p>
                  <StarRating rating={product.rating} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-[#5e4636] text-white px-6 py-3 rounded-full hover:bg-[#7f5f4c] transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
