import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext.jsx";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Checkout a single product
  const handleCheckout = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-4 font-semibold text-gray-700 text-lg pb-2 border-b border-gray-300">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 py-6 col-span-4">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((product, index) => {
            const total = parseFloat(product.price.slice(1)) * product.quantity;

            return (
              <div
                key={index}
                className="grid grid-cols-4 items-center py-6 border-b border-gray-300"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-md shadow"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 text-sm">
                      Color: {product.selectedColor} | Size: {product.selectedSize}
                    </p>
                    <button
                      className="text-red-500 text-sm mt-2 hover:underline"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center text-gray-800 font-medium">{product.price}</div>

                {/* Quantity */}
                <div className="text-center text-gray-800 font-medium">{product.quantity}</div>

                {/* Total + Checkout button */}
                <div className="text-right flex flex-col items-end gap-2">
                  <span className="text-gray-800 font-semibold">${total.toFixed(2)}</span>
                  <button
                    onClick={() => handleCheckout(product)}
                    className="bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition text-sm"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Subscribe />
      <Footer />
    </>
  );
};

export default ShoppingCart;
