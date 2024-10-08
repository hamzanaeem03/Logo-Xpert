import React from "react";
import ReusableButton from "./ReusableButton";

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
          <ReusableButton
            text="VIEW MORE"
            link="#"
            background="linear-gradient(to right, #FFFFFF15, #D9D9D90B)"
            className="mx-4"
            textColor="transparent"
          />

          <ReusableButton
            text="GET A QUOTE"
            link="#"
            background="linear-gradient(to right, #D903B3, #62C6FF)"
            className="mx-4"
            textColor="white"
          />
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
