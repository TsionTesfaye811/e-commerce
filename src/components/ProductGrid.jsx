import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const ProductGrid = () => {
  const products = [
    { id: 1, name: "The Clous Relaxed Cardigan", price: "$50", image: PR1 },
    { id: 2, name: "The Long-Sleeve Turtelneck", price: "$75", image: PR2 },
    { id: 3, name: "The wool Flannel Pant", price: "$100", image: PR3 },
    { id: 4, name: "Product 4", price: "$120", image: PR4 },
    { id: 5, name: "Product 5", price: "$90", image: PR5 },
    { id: 6, name: "Product 6", price: "$60", image: PR6 },
    { id: 7, name: "Product 7", price: "$80", image: PR7 },
    { id: 8, name: "Product 8", price: "$110", image: PR8 },
    { id: 9, name: "Product 9", price: "$95", image: PR9 },
    { id: 10, name: "Product 10", price: "$70", image: PR10 },
    { id: 11, name: "Product 11", price: "$130", image: PR11 },
    { id: 12, name: "Product 12", price: "$85", image: PR12 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // example: 3 pages

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl relative"
            >
              {/* Image */}
              <div className="w-full h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product info */}
              <div className="p-4 flex flex-col justify-end h-20 relative">
                <div className="flex justify-between items-end w-full">
                  {/* Left: Name + Stars */}
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800 ">
                      {product.name}
                    </h3>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      {/* Example: 5 stars */}
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>☆</span>
                    </div>
                  </div>

                  {/* Right: Price */}
                  <p className="font-poppins font-semibold text-gray-800">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-20 mb-20 space-x-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                currentPage === page
                  ? "bg-white shadow font-semibold"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next page button with double right arrow */}
        <button
          onClick={handleNextPage}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          »
        </button>
      </div>
    </>
  );
};

export default ProductGrid;
