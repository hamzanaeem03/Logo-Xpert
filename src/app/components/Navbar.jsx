import Image from "next/image";
import React from "react";
import ReusableButton from "./ReusableButton";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className=" container mx-auto px-4 fixed bg-gradient-to-b from-[#ffffff1c] to-[#ffffff00] flex justify-between items-center  z-50 bg-opacity-50 backdrop-blur-md h-[90px]">
        <div className="text-white gap-2 flex justify-center items-center ">
          <Image src={"/Frame.png"} alt="Logo" height={28} width={28} />
          <span className=" text-md font-primary font-bold">360 LogoXpert</span>
        </div>
        <ReusableButton
          text="GET A QUOTE"
          link="#"
          background="linear-gradient(to right, #D903B3, #62C6FF)"
          className=""
          textColor="white"
        />
      </nav>
    </div>
  );
};

export default Navbar;
