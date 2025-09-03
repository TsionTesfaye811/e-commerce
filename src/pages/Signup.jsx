import React from "react";
import { motion } from "framer-motion";
import signupImg from "../assets/Signup.png"; // replace with your image
import googleLogo from "../assets/google.png"; // small google logo
import emailLogo from "../assets/gmail.png";   // small email icon

const SignUp = () => {
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
          src={signupImg}
          alt="Sign up"
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
          Create Account
        </p>

        {/* Social Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-11 w-full max-w-md">
          <button className="flex-1 border border-black py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>
          <button className="flex-1 border border-black py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
            <img src={emailLogo} alt="Email" className="w-5 h-5" />
            <span>Sign up with Email</span>
          </button>
        </div>

        {/* OR Separator */}
        <div className="mb-10 w-full max-w-md text-center">
          <span className="text-xl font-bold">-OR-</span>
        </div>

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

          {/* Password & Confirm Password */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="password"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="Password"
            />
            <input
              type="password"
              className="border-b border-gray-400 focus:outline-none py-2 flex-1"
              placeholder="Confirm Password"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Create Account
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-black font-semibold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
