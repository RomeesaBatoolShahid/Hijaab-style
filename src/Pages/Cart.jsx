import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  const getTotal = () => {
    return cartItems.length;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-[#5e4636] mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-[#7f5f4c]">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, i) => (
            <div key={i} className="flex items-center space-x-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-[#5e4636]">{item.name}</h3>
                <p className="text-sm text-[#7f5f4c]">{item.description}</p>
              </div>
            </div>
          ))}
          <p className="mt-6 text-[#5e4636] font-semibold">Total Items: {getTotal()}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
