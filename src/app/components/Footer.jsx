import React from "react";

const Footer = () => {
  return (
    <section className="container h-[200px] mx-auto flex flex-col items-center justify-center bg-[url('/footer-img.png')] py-16 px-8 text-white">
      <div className="text-center">
        <a href="/" className="flex items-center">
          <img
            src="/Frame.png" 
            alt="Logo"
            className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px]"
          />
          <span className="ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold font-primary">
            360{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62c5ff9f] to-[#c408a1] via-[#cd76ff]">
              LogoXpert{" "}
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
