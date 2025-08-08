import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { Star, Pencil, Trash2, Save } from "lucide-react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // index of review being edited
  const [editText, setEditText] = useState("");
  const [editRating, setEditRating] = useState(0);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);

    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];
    setReviews(storedReviews);
  }, [id]);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleReviewSubmit = () => {
    if (!reviewText || reviewRating === 0) return;
    const newReview = {
      text: reviewText,
      rating: reviewRating,
      time: new Date().toLocaleString(),
    };
    const updatedReviews = [...reviews, newReview];
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
    setReviewText("");
    setReviewRating(0);
  };

  const handleDelete = (index) => {
    const updated = reviews.filter((_, i) => i !== index);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updated));
    setReviews(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(reviews[index].text);
    setEditRating(reviews[index].rating);
  };

  const handleSaveEdit = () => {
    const updated = reviews.map((r, i) =>
      i === editIndex ? { ...r, text: editText, rating: editRating } : r
    );
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updated));
    setReviews(updated);
    setEditIndex(null);
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return Math.round(total / reviews.length);
  };

  if (!product) return <p>Loading...</p>;

  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold text-[#5e4636]">{product.name}</h2>
      <p className="text-[#7f5f4c] my-2">{product.description}</p>
      <p className="font-semibold text-[#5e4636]">Available</p>

      <div className="flex items-center my-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < getAverageRating() ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-[#7f5f4c]">
          {reviews.length > 0 ? `(${reviews.length} reviews)` : "No reviews yet"}
        </span>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="bg-[#5e4636] text-white px-4 py-2 rounded-full" onClick={addToCart}>
          Add to Cart
        </button>
        <button className="bg-[#7f5f4c] text-white px-4 py-2 rounded-full">Buy Now</button>
      </div>

      {/* Submit Review */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-[#5e4636] mb-2">Leave a Review</h3>
        <textarea
          className="w-full p-3 border border-gray-300 rounded mb-2"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              onClick={() => setReviewRating(i + 1)}
              className={`h-5 w-5 cursor-pointer ${
                i < reviewRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          className="bg-[#5e4636] text-white px-4 py-2 rounded-full"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-[#5e4636] mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-[#7f5f4c]">No reviews yet. Be the first to write one!</p>
        ) : (
          <div className="space-y-4">
            {reviewsToShow.map((review, index) => (
              <div key={index} className="border p-4 rounded-lg bg-white relative">
                {editIndex === index ? (
                  <>
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded mb-2"
                    />
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          onClick={() => setEditRating(i + 1)}
                          className={`h-4 w-4 cursor-pointer ${
                            i < editRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      className="flex items-center text-sm text-green-600"
                      onClick={handleSaveEdit}
                    >
                      <Save className="w-4 h-4 mr-1" /> Save
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-2 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[#5e4636]">{review.text}</p>
                    <p className="text-xs text-[#7f5f4c] mt-1">{review.time}</p>
                    <div className="flex space-x-3 mt-2">
                      <button
                        className="flex items-center text-sm text-blue-600"
                        onClick={() => handleEdit(index)}
                      >
                        <Pencil className="w-4 h-4 mr-1" /> Edit
                      </button>
                      <button
                        className="flex items-center text-sm text-red-600"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {reviews.length > 5 && !showAllReviews && (
              <button
                onClick={() => setShowAllReviews(true)}
                className="text-[#5e4636] underline mt-2"
              >
                View More Reviews
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
