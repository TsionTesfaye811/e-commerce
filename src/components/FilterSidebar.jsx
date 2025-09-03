import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-6 sticky top-0 h-fit -ml-20">

      {/* Sidebar Heading */}
      <h2 className="font-poppins font-bold text-2xl mb-2">Filter</h2>
      <hr className="border-gray-300 mb-6" />

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-poppins font-medium text-lg mb-3">Category</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center">
              Clothing
            </label>
            <ul className="ml-5 space-y-1 text-gray-600">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Men’s Clothing
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Women’s Clothing
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Kids’ Clothing
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label className="flex items-center">
              Accessories
            </label>
            <ul className="ml-5 space-y-1 text-gray-600">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Bag
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Shoes
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hats & Caps
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label className="flex items-center">
              Seasonal / Special
            </label>
            <ul className="ml-5 space-y-1 text-gray-600">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Winter Collection
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Summer Collection
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Sale / Discount Deals
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label className="flex items-center">
              Other
            </label>
          </li>
          <li>
            <ul className="ml-5 space-y-1 text-gray-600">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  New Arrivals
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Featured Items
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Best Picks
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Color Filter with Circles */}
      <div className="mb-6">
        <h3 className="font-poppins font-medium text-lg mb-3">Color</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          {["Black", "White", "Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Gray", "Pink"].map((color) => (
            <div key={color} className="flex flex-col items-center">
              <span
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color.toLowerCase() }}
              ></span>
              <span className="text-xs mt-1">{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter as nested lists */}
      <div className="mb-6">
        <h3 className="font-poppins font-medium text-lg mb-3">Size</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center">
              Waist
            </label>
            <ul className="ml-5 space-y-1 text-gray-600">
              {[28, 30, 32, 34].map((size) => (
                <li key={size}>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {size}
                  </label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <label className="flex items-center">
              Clothing
            </label>
            <ul className="ml-0 grid grid-cols-4 gap-2 text-gray-600 mt-2">
              {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <label key={size} className="flex flex-col items-center text-xs">
                  <input type="checkbox" className="mb-1" />
                  {size}
                </label>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Clothing Type Filter (unchanged) */}
      <div className="mb-6">
        <h3 className="font-poppins font-medium text-lg mb-3">Clothing</h3>
        <ul className="space-y-2 ml-5">
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              T-Shirts
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Jeans
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Jackets
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Sweaters
            </label>
          </li>
        </ul>
      </div>

      {/* Pricing Filter with Ranges */}
      <div>
        <h3 className="font-poppins font-medium text-lg mb-3">Pricing</h3>
        <ul className="space-y-2 ml-5">
          {["$0 - $50", "$50 - $100", "$100 - $150", "$150 - $200", "$300 - $400"].map((range) => (
            <li key={range}>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {range}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
