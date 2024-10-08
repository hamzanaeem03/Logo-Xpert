import React from "react";
import HeroStrip from "./HeroStrip";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Arlene McCoy",
      company: "McDonald's",
      review:
        "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      stars: 5,
      image: "/test1.png", 
      verified: true,
    },
    {
      name: "Kathryn Murphy",
      company: "General Electric",
      review:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      stars: 5,
      image: "/test2.png",
      verified: true,
    },
  ];

  return (
    <section className="bg-[#1e1e1e] container  mx-auto py-12 ">
      <HeroStrip
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        backgroundImage={
          "linear-gradient(180deg, #FFFFFF15 , #D9D9D90B), url('/bottom.png')"
        }
        additionalClasses="mb-12"
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative rounded-lg p-6 shadow-md transition-transform "
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF15, #D9D9D90B), url('/bottom.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <div className="text-white">
                    {"★".repeat(testimonial.stars)}
                    {"☆".repeat(5 - testimonial.stars)}
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-8 h-14 -mt-14 bg-purple-600"
                      style={{
                        clipPath: "polygon(0 0, 100% 41%, 100% 100%, 0% 100%)",
                      }}
                    ></div>
                    <div
                      className="w-8 h-14 -mt-14 bg-pink-600"
                      style={{
                        clipPath: "polygon(0 0, 100% 41%, 100% 100%, 0% 100%",
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-white text-sm sm:text-base">
                  {testimonial.review}
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <span className="ml-auto text-white text-sm flex items-center">
                      <img
                        src="/Cyan.png"
                        alt="Verified"
                        className="w-5 h-5 mr-1"
                      />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
