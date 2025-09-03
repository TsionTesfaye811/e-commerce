import heroBg from "../assets/hero-bg.png";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

export default function Hero() {
  const navigate = useNavigate(); // <-- initialize navigate

  const handleShopNow = () => {
    navigate("/signin"); // <-- navigate to Sign In page
  };

  return (
    <section 
      className="h-screen bg-cover bg-center relative flex items-center justify-center md:justify-start"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text content */}
      <div className="relative max-w-lg text-center md:text-left md:ml-16 text-white px-6 sm:px-8">
        <h1 
          className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold" 
          style={{ fontFamily: 'Poppins' }}
        >
          YOUR COZY ERA
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-0">
          Get peak comfy-chic with new winter essentials<br />
          From cozy oversized knits to sleek layering pieces that elevate your style.
        </p>

        <button
          onClick={handleShopNow} // <-- added onClick
          className="mt-4 sm:mt-6 bg-white text-black hover:bg-gray-200 transition w-full sm:w-60 h-10 sm:h-11 font-medium"
          style={{ fontFamily: 'Poppins' }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
