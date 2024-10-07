import React from "react";

const Cards = () => {
  return (
    <section
      className="container  mx-auto flex flex-col items-center justify-center py-24 text-white relative"
      style={{
        backgroundColor: "rgba(23, 23, 23, 1)" /* Solid base color */,
        backgroundImage: `
        radial-gradient(at 49.28% 47.05%, rgb(69, 43, 140, 1) 0, transparent 73%), 
        radial-gradient(at 72.84% -20.12%, rgb(69, 43, 140, 1) 0, transparent 75%), 
        radial-gradient(at -12.51% -17.28%, rgb(76, 175, 241, 1) 0, transparent 36%)`,
      }}
    >
      {/* Diamond Shape Background */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[710px] h-[691px] bg-[#452B8C] opacity-50 transform rotate-45"></div>
    </div> */}
      {/* Sub-heading */}
      <p className="text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#F81DFB] z-10 relative">
        Explore Our Newly Delivered Collection
      </p>
      {/* Main Heading */}
      <h2
        className=" lg:text-[96px] font-[400] text-white mb-16"
        style={{
          textShadow:
            "2px 8px 6px rgba(0, 0, 0, 0.3), 0px -5px 16px rgba(255, 255, 255, 0.4)",
        }}
      >
        Our Collection
      </h2>
      {/* Card Carousel */}
      <div className="relative w-full max-w-[1200px] flex justify-center z-10">
        <div className="flex justify-center items-center space-x-[-100px] w-5/6">
          {/* Cards */}
          {[
            { src: "/Rectangle1.png", size: "w-[200px] h-[267px]" },
            { src: "/Rectangle2.png", size: "w-[253px] h-[338px]" },
            { src: "/Rectangle3.png", size: "w-[310px] h-[413px]" },
            { src: "/Rectangle4.png", size: "w-[363px] h-[484px]" },
            { src: "/Rectangle5.png", size: "w-[310px] h-[413px]" },
            { src: "/Rectangle6.png", size: "w-[253px] h-[338px]" },
            { src: "/Rectangle7.png", size: "w-[200px] h-[267px]" },
          ].map(({ src, size }, index) => (
            <div
              key={index}
              className={`${size} bg-cover bg-center rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105 z-10`}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
        </div>
      </div>
      <button>
        <a
          className="bg-gradient-to-r from-[#FFFFFF15] to-[#D9D9D90B] border border-[#FFFFFF33] mt-14 text-white relative inline-block font-medium drop-shadow-md	 px-6 py-4 sm:py-5 sm:px-5 rounded-xl text-[9px] md:text-sm"
          style={{
            fontFamily: "Lato, sans-serif",

            transform: "skew(-20deg)",
          }}
        >
          <span
            style={{
              transform: "skew(20deg)", // Reverse skew for text
            }}
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D903B3] to-[#62C6FF]"
          >
            VIEW MORE{" "}
          </span>
        </a>
      </button>{" "}
    </section>
  );
};

export default Cards;
