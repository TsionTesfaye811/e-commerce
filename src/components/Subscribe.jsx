import React from "react";

const SubscribeNewsletter = () => {
  return (
    <section
      className="py-16 rounded-2xl mx-[70px] mb-[50px]"
      style={{ backgroundColor: "#F1E8E4" }}
    >
      <div className="w-full max-w-md mx-auto p-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-poppins text-[28px] font-semibold text-black mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>

        {/* Input Box */}
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full px-4 py-2 rounded-lg mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Subscribe Button */}
        <button
          className="font-poppins font-medium text-[16px] px-8 py-2 bg-black text-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          Subscribe now
        </button>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
