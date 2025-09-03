import Hero from "../components/Hero";
import BrandCard from "../components/BrandCard";
import NewArrival from "../components/NewArrival";
import BestPick from "../components/BestPick";
import PromoBanner from "../components/PromoBanner";
import DressStyle from "../components/DressStyle";
import FeaturedCloth from "../components/FeaturedCloth";
import Testimonals from "../components/Testimonals";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandCard />
      <NewArrival />
      <BestPick />
      <PromoBanner />
      <DressStyle />
      <FeaturedCloth />
      <Testimonals />
      <Subscribe />
      <Footer />
    </>
  );
}
