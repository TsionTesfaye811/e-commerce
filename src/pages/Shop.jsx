import React from "react";
import Navbar from "../components/Navbar"; // assuming this is where your navbar is
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid"; // import ProductGrid

const Shop = () => {
  return (
    <>
      {/* Main shop content */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <FilterSidebar />

        {/* Product grid */}
        <div className="flex-1 mt-7">
          <h2 className="font-poppins font-semibold text-2xl mb-4">All Products</h2>
          <p className="text-gray-600 mb-6">
            Choose your favorites from our wide selection.
          </p>

          {/* Call ProductGrid component */}
          <ProductGrid />
        </div>
      </section>

      {/* Subscribe section */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Shop;
