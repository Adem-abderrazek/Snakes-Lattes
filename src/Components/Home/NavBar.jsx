import React from 'react'
import { useState, useEffect } from 'react';

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
    <nav className={`fixed top-0 w-full z-50  transition-all duration-300 ${isScrolled ? 'bg-peach' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* <div className="font-bold text-xl">Gusto</div> */}
         <a href="/"><img width={150} height={30} src="https://www.maxandissys.com/wp-content/uploads/2021/05/max-issy-logo-chicago-1.png" alt="" /></a>
        <ul className="flex space-x-8">
          <li><a href="#menu" className=" text-lg text-bloody ">Menu</a></li>
          <li><a href="#about us" className=" text-lg text-bloody ">About Us </a></li>
          <li><a href="#reservation" className=" text-lg text-bloody ">Reservation</a></li>
          <li><a href="#reviews" className=" text-lg text-bloody">Review</a></li>
          <li><a href="#contactus" className=" text-lg text-bloody ">Contact</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar