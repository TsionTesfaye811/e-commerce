import React from "react";
import BannerImg from "../assets/banner.png"; // replace with your actual image

const PromoBanner = () => {
  return (
    <section
      className="w-full h-[500px] bg-cover bg-center flex items-center mt-[60px]"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-opacity-50 p-8 rounded-2xl max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-poppins text-white text-[48px] sm:text-[36px] font-semibold leading-tight mb-6">
            Unfollow the ordinary — step <br /> into tomorrow’s fashion, today
          </h2>

          {/* Shop Now Button */}
          <button
            className="font-poppins font-medium text-[16px] px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
