import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import signinImg from "../assets/signup.png"; // Only used on desktop
import googleLogo from "../assets/google.png";
import emailLogo from "../assets/gmail.png";

const Signin = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Normally you'd validate credentials here
    navigate("/shop"); // Redirect to shop page
  };

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
          src={signinImg}
          alt="Sign In"
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
          Sign In To FASCO
        </p>

        {/* Social Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-md">
          <button className="flex-1 border border-black py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>
          <button className="flex-1 border border-black py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
            <img src={emailLogo} alt="Email" className="w-5 h-5" />
            <span>Sign in with Email</span>
          </button>
        </div>

        {/* OR Separator */}
        <div className="mb-6 w-full max-w-md text-center">
          <span className="text-xl font-bold">-OR-</span>
        </div>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleSignIn}>
          <div className="flex flex-col">
            <input
              type="email"
              className="border-b border-gray-400 focus:outline-none py-2"
              placeholder="example@email.com"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              className="border-b border-gray-400 focus:outline-none py-2"
              placeholder="********"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Sign In
          </button>

          {/* Forgot Password Link */}
          <div className="flex justify-center md:justify-end -mt-2">
            <a
              href="/forgot-password"
              className="text-sm text-black font-medium hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Link to Sign Up */}
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-black font-semibold hover:underline">
              Create one
            </a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Signin;
