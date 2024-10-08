import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Investing from "./components/Investing";
import VirtualReality from "./components/VirtualReality";
import PlayToEarn from "./components/PlayToEarn";
import PricingCard from "./components/PricingCards";
import TestimonialSection from "./components/TestimonialSection";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import HeroStrip from "./components/HeroStrip";

export default function Home() {
  return (
    <div className="bg-[#1e1e1e]">
      <div className="container mx-auto ">
        <Navbar />
        <HeroSection />
        <HeroStrip
          style={{
            transform: "rotate(-2deg)",
            transformOrigin: "right center",
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
          additionalClasses="relative z-10 mt-[-100px] bg-opacity-90 backdrop-blur-xl"
        />
        <Cards />
        <Investing />
        <PlayToEarn />
        <VirtualReality />
        <PricingCard />
        <TestimonialSection />
        <Bottom />
        <Footer />
      </div>
    </div>
  );
}
