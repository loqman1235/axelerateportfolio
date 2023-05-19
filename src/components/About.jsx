import React from "react";
import Memphics_1 from "../assets/memphics.svg";

const About = () => {
  return (
    <div className="w-full p-5 md:p-10 relative pb-40">
      <div className="flex flex-col items-center justify-center w-full p-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl relative backdrop-blur-2xl shadow-2xl">
        <h3 className="title">About Me</h3>
        <p className="text-sm text-[#B3C7D6] leading-[26px] text-center w-full md:w-1/2">
          Hello, I'm Axel, a passionate UI designer and full stack developer.
          With a creative mindset and technical expertise, I strive to bridge
          the gap between seamless user experiences and powerful functionality.
          <br />
          <br />
          As a UI designer, I have a keen eye for aesthetics, crafting visually
          appealing interfaces that not only captivate users but also ensure
          intuitive interactions.
          <br />
          <br />I believe in the power of clean, minimalistic designs that
          prioritize simplicity and clarity, allowing users to effortlessly
          navigate and engage with the digital world.
        </p>
      </div>
      <img src={Memphics_1} className="absolute -left-6  top-0 z-[-1]" />
      <img
        src={Memphics_1}
        className="absolute -right-6 bottom-10 md:-bottom-0 z-[-1]"
      />
    </div>
  );
};

export default About;
