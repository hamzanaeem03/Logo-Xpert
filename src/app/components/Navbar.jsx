import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className=" container mx-auto px-4 fixed flex justify-between items-center  z-50 bg-opacity-90 backdrop-blur-xl h-[90px]">
        <div className="text-white gap-2 flex justify-center items-center ">
          <Image src={"/Frame.png"} alt="Logo" height={28} width={28} />
          <span className=" text-md font-primary font-bold">360 LogoXpert</span>
        </div>
        <button>
          <a
            className="bg-gradient-to-r from-[#D903B3] to-[#62C6FF] text-white relative inline-block font-medium px-6 py-4 sm:py-5 sm:px-5 rounded-xl text-[9px] md:text-sm"
            style={{
              fontFamily: "Lato, sans-serif",

              transform: "skew(-20deg)",
            }}
          >
            <span
              style={{
                transform: "skew(20deg)", // Reverse skew for text
              }}
              className="font-extrabold "
            >
              GET A QUOTE
            </span>
          </a>
        </button>{" "}
      </nav>
    </div>
  );
};

export default Navbar;
