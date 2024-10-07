import React from "react";

const Investing = () => {
  return (
    <section className=" container  mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 bg-[url('/invest_bg.png')] bg-cover bg-center text-white">
      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px]  font-medium font-secondary">
          Take Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18C8FF] to-[#933FFE] font-primary font-normal ">
            First Step
          </span>{" "}
          Into Safe, Secure{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#18C8FF] to-[#933FFE]
          font-primary font-normal "
          >
            Crypto
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18C8FF] to-[#933FFE] font-primary font-normal">
            Investing
          </span>
        </h1>
        {/* <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-medium font-secondary">
          Safe, Secure{" "}
          <span className="text-[#00A2FF] font-primary font-normal ">
            Crypto
          </span>{" "}
          Investing
        </h1> */}
        <p className="text-sm md:text-base text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="flex justify-center items-center">
          <button>
            <a
              className="bg-gradient-to-r from-[#FFFFFF15] mx-4 to-[#D9D9D90B] border border-[#FFFFFF33] text-white relative inline-block font-medium drop-shadow-md	px-8 py-4  rounded-xl text-[9px] md:text-sm"
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
          <button>
            <a
              className="bg-gradient-to-r from-[#D903B3] to-[#62C6FF] mx-4 text-white relative inline-block font-medium px-8 py-4 rounded-xl text-[9px] md:text-sm"
              style={{
                fontFamily: "Lato, sans-serif",

                transform: "skew(-20deg)",
              }}
            >
              <span
                style={{
                  transform: "skew(20deg)",
                }}
                className="font-extrabold "
              >
                GET A QUOTE
              </span>
            </a>
          </button>{" "}
        </div>
      </div>

      <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
        <img
          src="/invest.png"
          alt="3D Crypto Ball"
          className="w-[200px] md:w-[350px] lg:w-[450px] xl:w-[550px]"
        />
      </div>
    </section>
  );
};

export default Investing;
