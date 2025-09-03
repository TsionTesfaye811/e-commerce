import React from "react";
import chanel from "../assets/chanel.png";
import Louis from "../assets/Louis.png";
import prada from "../assets/prada.png";
import calvin from "../assets/calvin.png";
import denim from "../assets/denim.png";

const brands = [
  { src: chanel, height: 39 },
  { src: Louis, height: 30 },
  { src: prada, height: 38 },
  { src: calvin, height: 39 },
  { src: denim, height: 32 },
];

const BrandCard = () => {
  return (
    <div className="w-full py-8 flex justify-center bg-white mt-20">
      <div className="flex flex-wrap justify-center md:flex-nowrap gap-8 md:gap-12 items-center">
        {brands.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={`Brand ${index}`}
            style={{ height: `${logo.height}px` }}
            className="object-contain mb-6 md:mb-20 w-32 sm:w-40 md:w-[260px]"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
