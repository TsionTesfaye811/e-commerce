import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import forgotImg from "../assets/signup.png"; // Reuse the image

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col md:flex-row"
    >
      {/* Left Image Section - hidden on mobile */}
      <div className="hidden md:flex w-[700px] h-[800px] bg-gray-50 justify-center items-center p-8">
        <img
          src={forgotImg}
          alt="Forgot Password"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 bg-white">
        {/* Heading */}
        <h1
          className="text-5xl font-bold mb-8 md:mb-[70px] text-gray-600 text-center md:text-left"
          style={{ fontFamily: "Volkhov" }}
        >
          FASCO
        </h1>
        <p className="text-2xl font-semibold mb-6 text-center md:text-left">
          Forgot Password
        </p>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col gap-4">
          {/* First Name & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="Last Name"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="Email"
            />
            <input
              type="tel"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="Phone"
            />
          </div>

          {/* Send Confirmation Code Button */}
          <button
            type="button"
            onClick={() => navigate("/ConfirmationCode")}
            className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Send Confirmation Code
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-black font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
