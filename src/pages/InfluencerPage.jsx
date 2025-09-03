import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Import PNG images from assets folder
import nahom from "../assets/nahom.png";
import mahder from "../assets/mahder.png";
import rache from "../assets/rache.png";
import yuti_nass from "../assets/yuti_nass.png";

// Sample influencer data with ids
const influencers = [
  {
    id: 1,
    name: "Alex Johnson",
    type: "Fashion Creator",
    image: nahom,
    category: "VLOGGER",
    prize: "$500",
    description: "Alex is a top fashion creator collaborating with global brands.",
    social: {
      youtube: { username: "@alexjohnson", followers: "1.2M" },
      instagram: { username: "@alex.j", followers: "2.5M" },
      tiktok: { username: "@alexfashion", followers: "3.1M" },
    },
  },
  {
    id: 2,
    name: "Sophie Lee",
    type: "Travel Blogger",
    image: mahder,
    category: "VLOGGER",
    prize: "$700",
    description: "Sophie shares her amazing travel stories and experiences worldwide.",
    social: {
      youtube: { username: "@sophielee", followers: "1.8M" },
      instagram: { username: "@sophie.l", followers: "3.0M" },
      tiktok: { username: "@sophietravel", followers: "2.2M" },
    },
  },
  {
    id: 3,
    name: "Michael Brown",
    type: "Food Creator",
    image: rache,
    category: "VLOGGER",
    prize: "$450",
    description: "Michael creates viral food content that millions love to watch.",
    social: {
      youtube: { username: "@michaelbrown", followers: "950K" },
      instagram: { username: "@mike.food", followers: "1.1M" },
      tiktok: { username: "@mikeeats", followers: "1.9M" },
    },
  },
  {
    id: 4,
    name: "Emma Davis",
    type: "Lifestyle Influencer",
    image: yuti_nass,
    category: "VLOGGER",
    prize: "$600",
    description: "Emma inspires people with her unique lifestyle and wellness tips.",
    social: {
      youtube: { username: "@emmadavis", followers: "1.5M" },
      instagram: { username: "@emma.lifestyle", followers: "2.0M" },
      tiktok: { username: "@emma.l", followers: "2.8M" },
    },
  },
  {
    id: 5,
    name: "Liam Wilson",
    type: "Tech Reviewer",
    image: "/images/influencer5.jpg",
    category: "VLOGGER",
    prize: "$800",
    description: "Liam reviews cutting-edge tech gadgets and innovations.",
    social: {
      youtube: { username: "@liamtech", followers: "2.1M" },
      instagram: { username: "@liam.w", followers: "1.4M" },
      tiktok: { username: "@liamtech", followers: "1.9M" },
    },
  },
  {
    id: 6,
    name: "Olivia Martinez",
    type: "Fashion Creator",
    image: "/images/influencer6.jpg",
    category: "VLOGGER",
    prize: "$550",
    description: "Olivia creates stunning fashion content and trend guides.",
    social: {
      youtube: { username: "@oliviamartinez", followers: "1.3M" },
      instagram: { username: "@olivia.m", followers: "2.2M" },
      tiktok: { username: "@olivstyle", followers: "1.6M" },
    },
  },
];

const InfluencerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-20 py-12">
        {/* Search bar */}
        <div className="mb-8 flex justify-start">
          <input
            type="text"
            placeholder="Search for influencer"
            className="w-full md:w-1/3 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">All Influencers</h2>

        {/* Influencer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition relative bg-white w-full cursor-pointer"
              style={{ height: "520px" }}
              onClick={() => navigate(`/influencer/${influencer.id}`, { state: influencer })}
            >
              {/* Image */}
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-full h-64 object-cover"
              />

              {/* Name and Type */}
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold">{influencer.name}</h3>
                <p className="text-gray-500 text-sm">{influencer.type}</p>
              </div>

              <hr />

              {/* Social Icons and Category */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex space-x-3 items-center">
                  <FaYoutube className="text-red-500 text-lg hover:scale-110 transition" />
                  <FaInstagram className="text-pink-500 text-lg hover:scale-110 transition" />
                  <FaTiktok className="text-black text-lg hover:scale-110 transition" />
                </div>
                <p className="text-green-500 font-semibold">{influencer.category}</p>
              </div>

              {/* Advertising Prize */}
              <div className="flex items-center justify-between px-4 pb-4">
                <span className="text-gray-500 text-sm">Advertising Prize</span>
                <span className="font-semibold">{influencer.prize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / Navigation */}
        <div className="flex justify-center mt-12 space-x-6 text-2xl text-gray-700">
          <AiOutlineLeft className="cursor-pointer hover:text-green-500 transition" />
          <AiOutlineRight className="cursor-pointer hover:text-green-500 transition" />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default InfluencerPage;
