import React from "react";

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
      <div
        className="flex flex-wrap border bg-opacity-50 backdrop-blur-xl py-4 justify-evenly text-white text-xs lg:text-base font-bold "
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF15 , #D9D9D90B), url('/bottom.png')",
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {[
          "GAMING SPANING",
          "ACTION - PACKED",
          "MIND - BENDING",
          "COLLECTION OG GAMES",
        ].map((text, index) => (
          <span key={index} className="flex justify-evenly w-1/4">
            <img height={20} width={20} src={"/Star 1.svg"} />

            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlayToEarn;
