import Image from "next/image";

import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto  bg-gradient-to-b from-[#ffffff1a] to-[#00000069] ">
      <div className="bg-[url('/Astronaut.png')]  h-[100vh] w-full bg-cover bg-[top_25%_right_15%] ">
        <div className="bg-gradient-to-b from-[#D905B31A] to-[#62c5ff21] w-full h-full pl-4 flex flex-col items-start justify-center md:px-[2rem] leading-tight">
          <div className="flex flex-col 2xl:gap-9 md:mb-10 mb-[8rem] backdrop-blur-sm justify-start items-start ">
            <p className="2xl:text-6xl xl:text-5xl lg:4xl md:text-3xl sm:text-2xl text-xl text-white font-secondary font-light">
              Translate Your Vision
            </p>
            <p
              className="font-medium shadow-sm text-white 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl  font-secondary mb-2 "
              style={{
                textShadow:
                  "2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 16px rgba(255, 255, 255, 0.3)",
              }}
            >
              Into Interesting
            </p>
            <p className="text-transparent font-primary 2xl:text-8xl xl:text-7xl  lg:text-6xl md:text-5xl sm:text-4xl pb-1 text-3xl font-normal bg-clip-text bg-gradient-to-r from-[#D903B3] to-[#62C6FF]">
              Logo Design
            </p>
          </div>
        </div>
        {/* <div
          className="flex flex-wrap mt-[-100px] bg-opacity-90 backdrop-blur-xl  py-4 justify-evenly text-white text-xs lg:text-base font-bold "
          style={{
            // backgroundImage:
            //   "linear-gradient(180deg, #968ad1 , #2b2640)",
            transform: "rotate(-1deg)",
            transformOrigin: "right center",
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
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
