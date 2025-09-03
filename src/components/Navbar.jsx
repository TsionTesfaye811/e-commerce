import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div
          className="text-black font-normal text-3xl md:text-[52px] cursor-pointer"
          style={{ fontFamily: "Volkhov" }}
          onClick={() => navigate("/")} // Navigate to Home on logo click
        >
          FASCO
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 text-gray-700 font-medium text-lg">
          <li>
            <button
              onClick={() => navigate("/signin")}
              className="hover:text-black transition-colors"
            >
              Shop
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/signin")}
              className="hover:text-black transition-colors"
            >
              Product
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/influencer")}
              className="hover:text-black transition-colors"
            >
              Influencer
            </button>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-8 pr-4 py-1 text-sm focus:outline-none"
            />
            <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <FiShoppingCart className="text-gray-700 text-xl md:text-2xl cursor-pointer" />
          <FiUser
            className="text-gray-700 text-xl md:text-2xl cursor-pointer"
            onClick={() => navigate("/signin")}
          />

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white shadow-md ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4">
          <li className="border-b">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/signin");
              }}
              className="block py-3 text-gray-700 hover:text-black w-full text-left"
            >
              Shop
            </button>
          </li>
          <li className="border-b">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/signin");
              }}
              className="block py-3 text-gray-700 hover:text-black w-full text-left"
            >
              Product
            </button>
          </li>
          <li className="border-b">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/influencer");
              }}
              className="block py-3 text-gray-700 hover:text-black w-full text-left"
            >
              Influencer
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
