import React from "react";
import heroIllustration from "../assets/hero_illustration.svg";

export const Hero = () => {
  return (
    <div className="px-10 flex md:flex-row flex-col items-center md:justify-between justify-center pb-40 gap-10">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight md:leading-[57.6px] mb-4">
          Unleash the Power of{" "}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Innovative
          </span>{" "}
          Web Solutions
        </h1>
        <p className="text-sm md:text-lg font-light text-[#B3C7D6]  leading-[26px] md:leading-[32px] w-full mb-5">
          Hi there, I'm Axel, a web developer with a passion for crafting
          captivating digital experiences. From pixel-perfect designs to
          flawless functionality, I thrive on bringing innovative ideas to life.
        </p>
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <a
            href="#"
            className="py-3 px-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl text-lg font-semibold hover:from-blue-500 hover:to-teal-400 transition duration-700 shadow-sm"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="py-3 px-8 bg-white/5 text-lg font-semibold rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition duration-700 shadow-sm"
          >
            My Projects
          </a>
        </div>
      </div>
      {/* Illustration */}
      <div className="md:block">
        <img
          className="select-none pointer-events-none object-contain"
          src={heroIllustration}
          alt="illustration"
        />
      </div>
    </div>
  );
};
