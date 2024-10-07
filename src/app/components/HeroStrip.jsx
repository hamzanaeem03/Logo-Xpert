import React from "react";

const HeroStrip = () => {
  return (
    <div
      className="flex border relative z-10 flex-wrap mt-[-100px] bg-opacity-90 backdrop-blur-xl  py-4 justify-evenly text-white text-xs lg:text-base font-bold "
      style={{
        // backgroundImage: "url('/imagebg.png')",
        transform: "rotate(-2deg)",
        transformOrigin: "right center",
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
  );
};

export default HeroStrip;
