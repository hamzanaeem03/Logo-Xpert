import React from "react";

const HeroStrip = ({ style, backgroundImage, additionalClasses }) => {
  const defaultStyles = {
    borderColor: "rgba(255, 255, 255, 0.2)",
    ...style,
  };

  return (
    <div
      className={`flex border flex-wrap py-4 justify-evenly text-white text-xs lg:text-base font-bold ${additionalClasses}`}
      style={{
        ...defaultStyles,
        backgroundImage,
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
