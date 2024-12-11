
import React, { useEffect, useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Hero = () => {
  const images = [image2,image1, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen font-merienda ">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>


      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div
        className={`relative h-full flex flex-col justify-center items-center text-center text-white px-4 transition-opacity duration-[3000ms] delay-500 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl  text-[#fae0c1] md:text-5xl font-merienda mb-4">
        A neighborhood place serving New York style pizza.
        </h1>
        <p className="text-lg text-white md:text-2xl mb-8 max-w-3xl font-merienda">
        <span className="text-[#B73C21] font-merienda">Max</span>{" "}
      <span className="text-[#fae0c1] font-merienda italic">&</span>{" "}
      <span className="text-[#B73C21] font-merienda">Issy</span>
      <span className="text-[#fae0c1] font-merienda">’s Pizzeria</span> Now open for Lunch on Saturday and Sunday!
        </p>
        <p className="text-lg text-white md:text-2xl mb-8 max-w-3xl">
          is Closed on Mondays.
        </p>
       <a  href="#menu" className=" cursor-pointer px-6 py-3 bg-[#B73C21] text-white font-semibold rounded hover:bg-[#fae0c1] transition duration-300 bounce-button hover:text-[#B73C21]">See Menu</a>
      </div>
    </div>
  );
};

export default Hero;



