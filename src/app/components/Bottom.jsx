import React from "react";

const Bottom = () => {
  return (
    <section className="flex container  mx-auto flex-col items-center justify-center bg-[url('/bottom.png')] py-16 px-8 text-white">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D903B3] via-[#a864ff] font-primary">
          RECEIVE TRANSMISSIONS
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mb-8">
          Unsubscribe at anytime. Privacy policy
        </p>
        <form className="flex flex-col  sm:flex-row items-center space-yt-4 sm:space-y-0 sm:space-x-2 relative w-full max-w-[500px] mx-auto mb-8">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-purple-500 rounded-lg px-4 py-3 w-full sm:w-auto flex-grow text-white focus:outline-none focus:ring-2 focus:ring-[#62C6FF] focus:border-transparent"
          />
          {/* Arrow Icon Inside Input Field */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#565976] rounded-full w-10  flex items-center justify-center "
          >
            <span className="text-[1.5rem]">&#10132;</span> {/* Arrow Icon */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Bottom;
