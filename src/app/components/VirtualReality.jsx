import React from "react";

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
        <div className=" w-full lg:w-1/2">
          {" "}
          <img src="/virtual.png" alt="Virtual Reality Gaming" />
        </div>
        <div className="lg:w-1/2 text-center mt-8 lg:text-left">
          <h2 className="text-5xl font-normal font-primary bg-clip-text text-transparent text-white leading-tight">
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
          <button>
            <a
              className="bg-gradient-to-r from-[#D903B3] to-[#62C6FF] mt-10 text-white relative inline-block px-6 py-4 sm:py-5 sm:px-5 rounded-xl text-[9px] md:text-sm"
              style={{
                fontFamily: "Lato, sans-serif",

                transform: "skew(-20deg)",
              }}
            >
              <span
                style={{
                  transform: "skew(20deg)", // Reverse skew for text
                }}
                className="font-bold "
              >
                PLAY NOW{" "}
              </span>
            </a>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default VirtualReality;
