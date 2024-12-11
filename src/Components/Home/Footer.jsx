import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#fae0c1] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 ">
            <div className="flex">
              <img
                src={logo}
                alt="Logo"
                className="h-10 W-15 object-contain scale-125"
              />
            </div>
            <p className="text-gray-400 ">
             
            </p>
          </div>

            <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg text-black font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
              <li>
                  <a href="#menu" className="text-gray-400 hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about us" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                
                <li>
                  <a href="#reservation" className="text-gray-400 hover:text-white">
                  Reservation
                  </a>
                </li>
               
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-black font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contactus" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="text-gray-400 hover:text-white">
                    
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>

            <div className="md:col-span-1 flex items-center justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
