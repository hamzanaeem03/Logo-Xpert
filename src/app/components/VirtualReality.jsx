import React from "react";
import ReusableButton from "./ReusableButton";

const VirtualReality = () => {
  return (
    <div className="bg-[#1e1e1e] container mx-auto ">
      <div
        className="bg-[#1e1e1e] flex flex-col lg:flex-row mx-auto w-11/12 items-center border border-[#FFFFFF33] rounded-xl justify-between "
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF15 , #D9D9D90B), url('/bottom.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "fill",
        }}
      >
        {" "}
        <div className=" w-full h-full -mt-16 lg:w-1/2">
          {" "}
          <img src="/virtual.png" alt="Virtual Reality Gaming" />
        </div>
        <div className="lg:w-1/2 text-center mt-8 lg:text-left">
          <h2 className="text-5xl lg:text-4xl xl:text-5xl font-normal font-primary bg-clip-text text-transparent text-white leading-tight">
            {" "}
            DISCOVER THE{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D903B3] to-[#62C6FF]">
              VIRTUAL
            </span>{" "}
            REALITY GAMING
          </h2>
          <p className="text-lg text-gray-400 mt-8">
            {" "}
            A well-designed gaming headset online incorporates elements such as
            game characters, kinetic vibration, vibrant colors, and dynamic
            visuals to convey excitement, adventure, and the immersive nature of
            gaming.
          </p>
          <ReusableButton
            text="PLAY NOW"
            link="#"
            background="linear-gradient(to right, #D903B3, #62C6FF)"
            className="my-8"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualReality;
