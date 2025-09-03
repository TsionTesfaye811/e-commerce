import React from "react";

// Example product images
import NA1 from "../assets/PB1.png";
import NA2 from "../assets/PB2.png";
import NA3 from "../assets/PB3.png";
import NA4 from "../assets/PB4.png";

const products = [
  { img: NA1, name: "Cozy Sweater", place: "United State", reviews: "2.1K", price: "$120" },
  { img: NA2, name: "Winter Jacket", place: "India", reviews: "2.1K", price: "$250" },
  { img: NA3, name: "Stylish Scarf", place: "Tailand", reviews: "2.1K", price: "$60" },
  { img: NA4, name: "Comfy Boots", place: "United State", reviews: "2.1K", price: "$180" },
];

const NewArrival = () => {
  return (
    <section className="w-full mt-[60px] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="font-poppins font-normal text-[40px] sm:text-[50px] md:text-[60px] text-black mb-4 text-center md:text-left md:ml-[330px] mt-[40px]"
        >
          Our Best Pick For You
        </h2>
        {/* Paragraph */}
        <p
          className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#8A8A8A] mb-10 text-center md:text-left md:ml-[310px]"
          style={{ lineHeight: "26px" }}
        >
          Curated styles chosen to elevate your wardrobe with effortless flair.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
          {products.map((product, index) => {
            const originalPrice = parseFloat(product.price.replace("$", ""));
            const discountedPrice = (originalPrice * 0.98).toFixed(2); // 2% off
            return (
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

                {/* Place of Origin */}
                <p className="font-poppins text-[11px] font-medium text-gray-400 ml-4 -mt-0">
                  From: {product.place}
                </p>

                {/* Customer Reviews */}
                <p className="font-poppins text-[13px] font-medium text-gray-700 ml-3 mt-[8px]">
                  ({product.reviews}) Customer Reviews
                </p>

                {/* Price Section */}
                <div className="flex items-center gap-2 mt-2 ml-3">
                  <p className="font-poppins font-semibold text-gray-400 line-through text-[16px]">
                    {product.price}
                  </p>
                  <p className="font-poppins font-semibold text-black text-[16px]">
                    ${discountedPrice}
                  </p>
                  <p className="font-poppins font-medium text-red-600 text-[14px]">
                    2% 
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
