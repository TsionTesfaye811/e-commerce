import React from "react";
import LeftImg from "../assets/left.png";
import RightImg from "../assets/right.png";
import TopMiddleImg from "../assets/Top.png";
import BottomMiddleImg from "../assets/bottom.png";
import { FaArrowRight } from "react-icons/fa";

const BrowseDressStyle = () => {
  return (
    <section className="w-full bg-white mt-[60px]">
      {/* Section Heading */}
      <h2 className="font-poppins text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-black mb-4 text-center pt-10">
        Browse by Dress Style
      </h2>
      {/* Paragraph */}
      <p
        className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#8A8A8A] mb-8 text-center md:text-left md:ml-[440px]"
        style={{ lineHeight: "26px" }}
      >
        Explore a variety of looks tailored for every occasion and every mood.
      </p>

      {/* Full width container */}
      <div className="flex flex-col md:flex-row w-full md:h-[600px] m-0 p-0">
        {/* Left Image */}
        <div className="relative w-full md:w-1/4 h-[300px] md:h-full">
          <img
            src={LeftImg}
            alt="Left Dress"
            className="w-full h-full object-cover object-top rounded-none"
          />
          <p className="absolute bottom-4 left-4 text-white font-poppins font-semibold text-lg">
            Casual Dress
          </p>
          <FaArrowRight className="absolute bottom-4 right-4 text-white text-2xl" />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col w-full md:w-1/2 h-[600px] md:h-full m-0 p-0">
          {/* Top Middle */}
          <div className="relative h-1/2">
            <img
              src={TopMiddleImg}
              alt="Top Middle Dress"
              className="w-full h-full object-cover object-top rounded-none"
            />
            <p className="absolute bottom-4 left-4 text-white font-poppins font-semibold text-lg">
              Evening Gown
            </p>
            <FaArrowRight className="absolute bottom-4 right-4 text-white text-2xl" />
          </div>
          {/* Bottom Middle */}
          <div className="relative h-1/2">
            <img
              src={BottomMiddleImg}
              alt="Bottom Middle Dress"
              className="w-full h-full object-center object-top rounded-none"
            />
            <p className="absolute bottom-4 left-4 text-white font-poppins font-semibold text-lg">
              Party Dress
            </p>
            <FaArrowRight className="absolute bottom-4 right-4 text-white text-2xl" />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/4 h-[300px] md:h-full">
          <img
            src={RightImg}
            alt="Right Dress"
            className="w-full h-full object-cover object-top rounded-none"
          />
          <p className="absolute bottom-4 left-4 text-white font-poppins font-semibold text-lg">
            Maxi Dress
          </p>
          <FaArrowRight className="absolute bottom-4 right-4 text-white text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default BrowseDressStyle;
