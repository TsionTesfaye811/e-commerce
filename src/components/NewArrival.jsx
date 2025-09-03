import React from "react";

// Example product images
import NA1 from "../assets/NA1.png";
import NA2 from "../assets/NA2.png";
import NA3 from "../assets/NA3.png";
import NA4 from "../assets/NA4.png";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Men's Accessories",
  "Women's Fashion",
  "Discount Deals",
];

const products = [
  { img: NA1, name: "Cozy Sweater", brand: "ZARA", reviews: "2.1K", price: "$120" },
  { img: NA2, name: "Winter Jacket", brand: "AI KARAM", reviews: "2.1K", price: "$250" },
  { img: NA3, name: "Stylish Scarf", brand: "ZARA", reviews: "2.1K", price: "$60" },
  { img: NA4, name: "Comfy Boots", brand: "ZARA", reviews: "2.1K", price: "$180" },
];

const NewArrival = () => {
  return (
    <section className="w-full py-0 bg-white -mt-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="font-poppins font-normal text-[40px] sm:text-[50px] md:text-[60px] text-black mb-4 text-center md:text-left md:ml-[450px]"
        >
          New Arrivals
        </h2>

        {/* Paragraph */}
        <p
          className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#8A8A8A] mb-10 text-center md:text-left md:ml-[300px]"
          style={{ lineHeight: "26px" }}
        >
          New Season, new favorites. Handpicked styles that fit right in to your life.
        </p>

        {/* Categories Buttons */}
        <div className="flex gap-6 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`font-poppins text-[16px] w-[800px] h-[50px] rounded-[10px] transition-colors duration-300 
                ${index === 1 
                  ? "bg-black text-white" 
                  : "bg-[#FAFAFA] text-[#8A8A8A] hover:bg-black hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md flex flex-col"
              style={{ width: "300px", height: "350px" }}
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-[280px] h-[200px] mx-auto mt-2"
              />

              {/* Product Name with Stars */}
              <div className="flex items-center gap-[70px] mt-2 ml-3">
                {/* Product Name */}
                <h3 className="font-poppins font-medium text-gray-700 text-lg">{product.name}</h3>
                {/* Rating Stars */}
                <div className="flex gap-1 mr-2">
                  {Array(5)
                    .fill(0)
                    .map((_, starIndex) => (
                      <span key={starIndex} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
              </div>

              {/* Brand Name */}
              <p className="font-poppins text-[11px] font-medium text-gray-400 ml-4 -mt-0">{product.brand}</p>

              {/* Customer Reviews */}
              <p className="font-poppins text-[13px] font-medium text-gray-700 ml-3 mt-[8px]">
                ({product.reviews}) Customer Reviews
              </p>

              {/* Price and Almost Sold Out */}
              <div className="flex justify-between items-center mt-2 ml-3 mr-3">
                <p className="font-poppins font-semibold text-gray-800 text-[16px]">
                  {product.price}
                </p>
                <p className="font-poppins font-normal text-red-600 text-[10px]">
                  Almost Sold Out
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button
            className="font-poppins font-medium text-[16px]"
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "10px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
            }}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
