import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Person1 from "../assets/customer1.png";
import Person2 from "../assets/customer1.png";
import Person3 from "../assets/customer1.png";
import Person4 from "../assets/customer1.png";

const testimonials = [
  {
    img: Person1,
    comment:
      "I had an amazing experience with this brand. The quality is top-notch and I get compliments every time I wear it!",
    name: "Sarah Williams",
    role: "Traveler",
  },
  {
    img: Person2,
    comment:
      "These clothes feel so comfortable yet look so stylish. Definitely my go-to brand for any occasion.",
    name: "Michael Brown",
    role: "Traveler",
  },
  {
    img: Person3,
    comment:
      "Perfect fit and incredible quality. I’m already planning to order more outfits soon!",
    name: "Emily Johnson",
    role: "Traveler",
  },
  {
    img: Person4,
    comment:
      "The designs are unique, the fabric feels premium, and everything arrived quickly. Highly recommend!",
    name: "Daniel Carter",
    role: "Traveler",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center relative">
      {/* Heading */}
      <h2 className="font-poppins font-normal text-[32px] sm:text-[60px] text-black mb-4 text-center">
        Testimonials
      </h2>

      {/* Paragraph */}
      <p
        className="font-poppins font-medium text-[16px] sm:text-[20px] text-[#8A8A8A] mb-10 text-center px-4"
        style={{ lineHeight: "26px" }}
      >
        New Season, new favorites. Handpicked styles that fit right in to your life.
      </p>

      <div className="relative w-full max-w-[820px] h-[320px] flex justify-center items-center overflow-visible px-4">
        <AnimatePresence>
          {testimonials.map((t, i) => {
            const position = (i - index + testimonials.length) % testimonials.length;
            let offsetX = 0;
            let scale = 1;
            let zIndex = 0;
            let opacity = 1;

            if (position === 0) {
              offsetX = 0;
              scale = 1;
              zIndex = 30;
              opacity = 1;
            } else if (position === 1) {
              offsetX = 300;
              scale = 0.9;
              zIndex = 20;
              opacity = 0.6;
            } else if (position === testimonials.length - 1) {
              offsetX = -300;
              scale = 0.9;
              zIndex = 20;
              opacity = 0.6;
            } else {
              offsetX = 0;
              scale = 0.8;
              zIndex = 10;
              opacity = 0.4;
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ x: offsetX, scale, opacity, zIndex }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg flex overflow-hidden mx-auto"
                style={{ width: "100%", maxWidth: "820px", height: "320px" }}
              >
                {/* Left image */}
                <div className="w-[35%] h-full flex justify-center items-center bg-gray-50">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-[200px] h-[250px] object-cover rounded-lg shadow-md"
                  />
                </div>
                {/* Right content */}
                <div className="w-[65%] p-6 sm:p-10 flex flex-col justify-center">
                  <p className="font-poppins text-[14px] sm:text-[18px] text-gray-700 mb-4 leading-relaxed">
                    “{t.comment}”
                  </p>
                  <div className="flex gap-1 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-yellow-400 text-lg sm:text-xl"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
                  <h3 className="font-poppins font-semibold text-[18px] sm:text-[22px] text-black">
                    {t.name}
                  </h3>
                  <p className="font-poppins text-[13px] sm:text-[15px] text-gray-500">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Arrow buttons */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="bg-white text-black rounded-full p-3 transition"
        >
          <FaChevronLeft className="text-lg" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-black rounded-full p-3 transition"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
