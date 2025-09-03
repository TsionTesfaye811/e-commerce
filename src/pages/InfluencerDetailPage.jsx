import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { FaYoutube, FaInstagram, FaTiktok, FaStar } from "react-icons/fa";

// Import product images
import PR1 from "../assets/PR1.png";
import PR2 from "../assets/PR2.png";
import PR3 from "../assets/PR3.png";
import PR4 from "../assets/PR4.png";
import PR5 from "../assets/PR5.png";
import PR6 from "../assets/PR6.png";

const InfluencerDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const influencer = location.state; // Get passed influencer data

  useEffect(() => {
    if (!influencer) {
      // If no data is passed, navigate back to influencers page
      navigate("/influencers");
    }
  }, [influencer, navigate]);

  if (!influencer) {
    return (
      <div className="text-center py-20 text-lg">
        No influencer data available. Please go back and select an influencer.
      </div>
    );
  }

  // Product list for this page (6 products only)
  const products = [
    { id: 1, name: "The Clous Relaxed Cardigan", price: "$50", image: PR1 },
    { id: 2, name: "The Long-Sleeve Turtelneck", price: "$75", image: PR2 },
    { id: 3, name: "The Wool Flannel Pant", price: "$100", image: PR3 },
    { id: 4, name: "Product 4", price: "$120", image: PR4 },
    { id: 5, name: "Product 5", price: "$90", image: PR5 },
    { id: 6, name: "Product 6", price: "$60", image: PR6 },
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { influencer } });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Influencer Image */}
        <div className="flex justify-center">
          <img
            src={influencer.image}
            alt={influencer.name}
            className="rounded-xl shadow-lg w-3/4 h-[30rem] object-cover"
          />
        </div>

        {/* Right: Influencer Info */}
        <div className="-ml-8 lg:-ml-12">
          {/* Name */}
          <h1 className="text-3xl font-bold mb-3">{influencer.name}</h1>

          {/* Rating */}
          <div className="flex text-yellow-400 text-xl mb-5">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          {/* Type */}
          <p className="text-gray-600 text-lg mb-6">{influencer.type}</p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-10">
            {influencer.description ||
              "This influencer is a leading figure in their niche, creating engaging content and building a strong following. They are known for their creativity, authenticity, and ability to connect with audiences on multiple platforms."}
            {" "}They have successfully collaborated with top brands, reached millions of people worldwide, 
            and continuously innovate their content to keep their audience engaged. Their dedication, 
            professionalism, and influence make them a perfect choice for impactful campaigns.
          </p>

          {/* Social Cards */}
          <div className="space-y-6">
            {/* First row: Two cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* YouTube Card */}
              <div className="flex items-center border rounded-xl shadow-md p-4 hover:shadow-lg transition w-9/12">
                <FaYoutube className="text-red-500 text-2xl mr-4" />
                <div>
                  <p className="font-semibold">{influencer.social?.youtubeUser || "@youtube_user"}</p>
                  <p className="text-gray-500 text-sm">
                    {influencer.social?.youtubeFollowers || "1.3M followers"}
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="flex items-center border rounded-xl shadow-md p-4 hover:shadow-lg transition w-9/12">
                <FaInstagram className="text-pink-500 text-2xl mr-4" />
                <div>
                  <p className="font-semibold">{influencer.social?.instagramUser || "@instagram_user"}</p>
                  <p className="text-gray-500 text-sm">
                    {influencer.social?.instagramFollowers || "2M followers"}
                  </p>
                </div>
              </div>
            </div>

            {/* Second row: TikTok card */}
            <div className="flex items-center border rounded-xl shadow-md p-4 hover:shadow-lg transition w-[290px]">
              <FaTiktok className="text-black text-2xl mr-4" />
              <div>
                <p className="font-semibold">{influencer.social?.tiktokUser || "@tiktok_user"}</p>
                <p className="text-gray-500 text-sm">
                  {influencer.social?.tiktokFollowers || "3.5M followers"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-16 py-12">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl relative h-[28rem]"
            >
              <div className="w-full h-80 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col justify-end h-24 relative">
                <div className="flex justify-between items-end w-full">
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-800">{product.name}</h3>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    </div>
                  </div>
                  <p className="font-poppins font-semibold text-gray-800">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
};

export default InfluencerDetailPage;
