import React from "react";
import HeroStrip from "./HeroStrip";

const PlayToEarn = () => {
  return (
    <div className="bg-[#1e1e1e] container mx-auto text-white py-20 ">
      {" "}
      <div className="text-center max-w-6xl mx-auto px-8 pb-20">
        {" "}
        <h1 className="text-3xl md:text-6xl font-normal font-primary leading-10 ">
          {" "}
          Immersive play-to-earn experience for the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D903B3] to-[#62C6FF]">
            Web3 community
          </span>{" "}
          and beyond. For both{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D903B3] to-[#62C6FF]">
            mobile
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D903B3] to-[#62C6FF]">
            desktop gamers
          </span>
          .
        </h1>
      </div>
      <HeroStrip
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        backgroundImage={
          "linear-gradient(180deg, #FFFFFF15 , #D9D9D90B), url('/bottom.png')"
        }
        additionalClasses="mb-12"
      />
    </div>
  );
};

export default PlayToEarn;
