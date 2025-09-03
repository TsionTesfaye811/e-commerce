import React, { useState, useRef, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext.jsx";

import PR1 from "../assets/PR1.png";
import PR2 from "../assets/PR2.png";
import PR3 from "../assets/PR3.png";
import PR4 from "../assets/PR4.png";
import PR5 from "../assets/PR5.png";
import PR6 from "../assets/PR6.png";
import PR7 from "../assets/PR7.png";
import PR8 from "../assets/PR8.png";
import PR9 from "../assets/PR9.png";
import PR10 from "../assets/PR10.png";
import PR11 from "../assets/PR11.png";
import PR12 from "../assets/PR12.png";

import User1 from "../assets/customer1.png";
import User2 from "../assets/customer1.png";

const products = [
  { id: 1, name: "The Clous Relaxed Cardigan", price: "$50", image: PR1, images: [PR1, PR2, PR3] },
  { id: 2, name: "The Long-Sleeve Turtelneck", price: "$75", image: PR2, images: [PR2, PR3, PR4] },
  { id: 3, name: "The wool Flannel Pant", price: "$100", image: PR3, images: [PR3, PR4, PR5] },
  { id: 4, name: "Product 4", price: "$120", image: PR4, images: [PR4, PR5, PR6] },
  { id: 5, name: "Product 5", price: "$90", image: PR5, images: [PR5, PR6, PR7] },
  { id: 6, name: "Product 6", price: "$60", image: PR6, images: [PR6, PR7, PR8] },
  { id: 7, name: "Product 7", price: "$80", image: PR7, images: [PR7, PR8, PR9] },
  { id: 8, name: "Product 8", price: "$110", image: PR8, images: [PR8, PR9, PR10] },
  { id: 9, name: "Product 9", price: "$95", image: PR9, images: [PR9, PR10, PR11] },
  { id: 10, name: "Product 10", price: "$70", image: PR10, images: [PR10, PR11, PR12] },
  { id: 11, name: "Product 11", price: "$130", image: PR11, images: [PR11, PR12, PR1] },
  { id: 12, name: "Product 12", price: "$85", image: PR12, images: [PR12, PR1, PR2] },
];

const reviews = [
  {
    id: 1,
    userImage: User1,
    rating: 5,
    comment: "This product is amazing! Really high quality and fits perfectly.",
    date: "05 Aug 2025",
    images: [PR1, PR2],
  },
  {
    id: 2,
    userImage: User2,
    rating: 4,
    comment: "Good product, but the color is slightly different from the picture.",
    date: "01 Aug 2025",
    images: [PR3],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Added
  const influencer = location.state?.influencer; // Added

  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(product ? product.image : null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  if (!product) return <div className="min-h-screen flex items-center justify-center"><p className="text-xl font-semibold">Product not found.</p></div>;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setShowCart(true);
  };

  return (
    <>
      {/* Product details content (same as your existing code) */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: product images */}
        <div className="flex flex-col lg:flex-row gap-6 lg:col-span-2 justify-center items-center -ml-64 mb-52">
          <div className="flex lg:flex-col gap-4 justify-center items-center">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                } object-cover`}
              />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-[600px] object-contain rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Right side: product info */}
        <div className="flex flex-col justify-center space-y-6 -ml-80">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex text-yellow-500 text-xl">{"★★★★★"}</div>
          <div className="flex items-center space-x-3">
            <p className="text-2xl font-semibold text-gray-900">{product.price}</p>
            <p className="text-lg line-through text-gray-500">$80</p>
            <p className="text-lg text-red-600">-30%</p>
          </div>
          <p className="text-gray-600 font-medium">23 people are viewing this product</p>
          <p className="text-gray-600 font-medium">Only 12 items left in stock</p>

          {/* Size selection */}
          <div>
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex space-x-3">
              {["M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color selection */}
          <div>
            <p className="font-semibold mb-2">Color:</p>
            <div className="flex space-x-4">
              {["red", "blue", "green", "black"].map((color) => (
                <div
                  key={color}
                  onClick={() => { setSelectedColor(color); setSelectedImage(product.images[0]); }}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity selection */}
          <div>
            <p className="font-semibold mb-2">Quantity:</p>
            <div className="flex items-center border rounded-lg w-32">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-2 text-xl"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-xl"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition w-96"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="container mx-auto px-10 py-16">
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-9 top-1/3 -translate-y-1/2 z-10 text-gray-800 text-2xl"
          >
            {"<"}
          </button>
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden"
          >
            {products.slice(0, 10).map((p) => (
              <div
                key={p.id}
                className="w-[250px] h-[350px] bg-white rounded-xl shadow-md flex-shrink-0"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <div className="text-yellow-500 text-xs">{"★★★★★"}</div>
                  </div>
                  <p className="text-sm font-bold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-9 top-1/3 -translate-y-1/2 z-10 text-gray-800 text-2xl "
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="container mx-auto px-10 py-16">
        <h2 className="text-2xl font-bold mb-10 ml-[600px]">Reviews</h2>
        <div className="space-y-8">
          {reviews.map((r) => (
            <div key={r.id} className="flex flex-col border-b pb-6">
              <div className="flex items-start gap-4">
                <img src={r.userImage} alt="user" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-500">{Array(r.rating).fill("★")}</div>
                  </div>
                  <p className="mt-1 text-gray-800">{r.comment}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-sm">{r.date}</span>
                    <div className="flex items-center gap-2">
                      {r.images.map((img, idx) => (
                        <img key={idx} src={img} alt="review-img" className="w-14 h-14 object-cover rounded-md" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart popup */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[600px] h-[550px] p-6 relative flex flex-col justify-between">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-xl font-bold"
              onClick={() => setShowCart(false)}
            >
              ✕
            </button>
            <div>
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              <p className="mb-6 text-gray-600">But $122.35 more and get Free Shipping</p>
              <div className="flex items-center gap-4 mb-8">
                <img src={selectedImage} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-gray-600">Color: {selectedColor}</p>
                  <p className="font-bold">{product.price}</p>
                  <div className="flex items-center border rounded-lg w-32 mt-2">
                    <button
                      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                      className="px-4 py-2 text-xl"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <hr className="my-6" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Subtotal</span>
                <span className="font-bold">{`$${parseFloat(product.price.slice(1)) * quantity}`}</span>
              </div>
              <button
                className="bg-black text-white w-full py-3 rounded-lg font-semibold mb-2 hover:bg-gray-800 transition"
                onClick={() => navigate("/shopping-cart")}
              >
                Checkout
              </button>
              <div className="text-center">
                <button
                  onClick={() => {
                    setShowCart(false);
                    navigate("/shopping-cart");
                  }}
                  className="text-blue-600 hover:underline"
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Subscribe />
      <Footer />
    </>
  );
};

export default ProductDetails;
