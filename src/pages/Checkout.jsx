import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Checkout = () => {
  const [saveInfoDelivery, setSaveInfoDelivery] = useState(false);
  const [saveInfoPayment, setSaveInfoPayment] = useState(false);

  // Get selected product from ShoppingCart via navigation state
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">No product selected!</h2>
        <p className="text-gray-600 mt-2">Please go back to the shopping cart and select a product.</p>
      </div>
    );
  }

  // Parse price to number for calculations
  const productPrice = parseFloat(product.price.replace("$", ""));
  const quantity = product.quantity || 1;
  const shipping = 40;
  const subtotal = productPrice * quantity;
  const total = subtotal + shipping;

  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-4">FASCO Demo Checkout</h1>
        <hr className="border-gray-400 mb-12" />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Form */}
          <div>
            {/* Contact Header */}
            <div className="flex justify-start items-center mb-6">
              <h2 className="text-2xl font-semibold ml-20">Contact</h2>
              <p className="text-sm text-gray-600 ml-56 mt-1">
                Have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Create Account
                </Link>
              </p>
            </div>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-[500px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ml-20 mb-6"
            />

            {/* Delivery Section */}
            <div className="flex justify-start items-center mb-6">
              <h2 className="text-2xl font-semibold ml-20">Delivery</h2>
            </div>

            {/* Country/Region Dropdown */}
            <select
              className="w-[500px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ml-20 mb-4"
            >
              <option>Country/Region</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>France</option>
            </select>

            {/* First Name and Last Name side by side */}
            <div className="flex gap-4 ml-20 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Address Input */}
            <input
              type="text"
              placeholder="Address"
              className="w-[500px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ml-20 mb-4"
            />

            {/* City and Postal Code side by side */}
            <div className="flex gap-4 ml-20 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Save Info Checkbox for Delivery */}
            <div className="flex items-center ml-20 mb-6">
              <div
                className={`w-5 h-5 border border-gray-400 flex items-center justify-center cursor-pointer rounded-sm mr-2 ${
                  saveInfoDelivery ? "bg-black" : "bg-white"
                }`}
                onClick={() => setSaveInfoDelivery(!saveInfoDelivery)}
              >
                {saveInfoDelivery && (
                  <span className="text-white text-sm font-bold">&#10003;</span>
                )}
              </div>
              <p className="text-sm text-gray-600">Save This Info For Future</p>
            </div>

            {/* Payment Section */}
            <div className="flex justify-start items-center mb-6">
              <h2 className="text-2xl font-semibold ml-20">Payment</h2>
            </div>

            {/* Payment Method Dropdown */}
<div className="relative w-[500px] ml-20 mb-4">
  <select
    className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
  >
    <option value="visa">Visa</option>
    <option value="mastercard">MasterCard</option>
    <option value="amex">American Express</option>
    <option value="discover">Discover</option>
  </select>

  {/* Card icon */}
  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none ml-[440px]">
    💳
  </div>
</div>


            {/* Card Number Input */}
            <div className="relative w-[500px] ml-20 mb-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                🔒
              </div>
            </div>

            {/* Expiration Code and Security Code side by side */}
            <div className="flex gap-4 ml-20 mb-4">
              <input
                type="text"
                placeholder="Expiration Code"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="w-[240px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Card Holder Name Input */}
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-[500px] border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ml-20 mb-4"
            />

            {/* Save Info Checkbox for Payment */}
            <div className="flex items-center ml-20 mb-6">
              <div
                className={`w-5 h-5 border border-gray-400 flex items-center justify-center cursor-pointer rounded-sm mr-2 ${
                  saveInfoPayment ? "bg-black" : "bg-white"
                }`}
                onClick={() => setSaveInfoPayment(!saveInfoPayment)}
              >
                {saveInfoPayment && (
                  <span className="text-white text-sm font-bold">&#10003;</span>
                )}
              </div>
              <p className="text-sm text-gray-600">Save This Info For Future</p>
            </div>

            {/* Pay Now Button */}
            <div className="ml-20 mt-6">
              <button className="w-[500px] bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Pay Now
              </button>
            </div>
          </div>

          {/* Right Section - Product Summary */}
          <div className="border-l border-gray-300 pl-8 flex flex-col">
            {/* Product Preview */}
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 border rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                {product.selectedColor && (
                  <p className="text-sm text-gray-500">Color: {product.selectedColor}</p>
                )}
                {product.selectedSize && (
                  <p className="text-sm text-gray-500">Size: {product.selectedSize}</p>
                )}
                <p className="text-sm font-semibold mt-1">
                  {product.price} x {quantity}
                </p>
              </div>
            </div>

            {/* Subtotal, Shipping, Total */}
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Subtotal</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Shipping</p>
              <p className="font-medium">${shipping}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-700">Total</p>
              <p className="font-semibold">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
};

export default Checkout;
