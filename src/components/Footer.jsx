import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About / Brand */}
        <div>
          <h3 className="font-poppins text-[20px] font-semibold mb-4">BrandName</h3>
          <p className="font-poppins text-[14px] text-black px-4 md:px-0">
            Bringing you the latest fashion trends with quality and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-poppins text-[16px] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-poppins text-[14px] text-black">
            <li>Shop</li>
            <li>New Arrivals</li>
            <li>Best Picks</li>
            <li>Browse Styles</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="font-poppins text-[16px] font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2 font-poppins text-[14px] text-black">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-poppins text-[16px] font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-black">
            <FaFacebookF className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
            <FaTwitter className="hover:text-white transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center font-poppins text-gray-400 text-sm px-4">
        © {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
