import React from 'react'
import { useState, useEffect } from 'react';
import logo from "../../assets/logo2.png";
function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  console.log("hell,nlhbgvllllq");

  // Add a scroll listener to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50  transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* <div className="font-bold text-xl">Gusto</div> */}
         <a className='flex items-center' href="/"><img width={25} height={10} src={logo} alt="" /><span className='font-bold text-2xl text-[#7c7c5f]'>TABLE, DONKEY AND STICK</span></a>
        <ul className="flex space-x-8">
          <li><a href="#menu" className=" text-lg text-[#7c7c5f] ">Menu</a></li>
          <li><a href="#about us" className=" text-lg text-[#7c7c5f] ">About Us </a></li>
          <li><a href="#reservation" className=" text-lg text-[#7c7c5f] ">Reservation</a></li>
          <li><a href="#reviews" className=" text-lg text-[#7c7c5f]">Review</a></li>
          <li><a href="#contactus" className=" text-lg text-[#7c7c5f] ">Contact</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar