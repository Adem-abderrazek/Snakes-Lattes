import React from "react";
import video from "../../assets/bg.mp4";
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-0">TABLE, DONKEY AND STICK</h1>
        <p className=" text-lg md:text-xl mt-0">
        Crusty Bread, Brandy, Fire
        </p>
      </div>
    </div>
  );
};

export default Hero;
