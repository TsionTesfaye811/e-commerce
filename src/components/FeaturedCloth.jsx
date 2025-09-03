import React from "react";
import ModelImg from "../assets/model.png"; // replace with your actual image

const FeaturedCloth = () => {
  return (
    <section className="w-full bg-white mt-[60px] relative h-auto md:h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-full">
        {/* Left Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 text-center md:text-left">
          <p className="font-poppins text-[14px] sm:text-[15px] text-gray-700">
            People are talking
          </p>
          <div className="flex justify-center md:justify-start gap-1 mt-2 mb-4">
            {Array(5)
              .fill(0)
              .map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
          </div>
          <p className="font-poppins font-medium text-[18px] sm:text-[20px] md:text-[22px] text-gray-700 leading-relaxed">
            "Love this shirt! Fits perfectly and <br className="hidden md:block"/> 
            the fabric is thick without <br className="hidden md:block"/> 
            being stiff."
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-full">
          <img
            src={ModelImg}
            alt="Model Wearing Outfit"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCloth;
