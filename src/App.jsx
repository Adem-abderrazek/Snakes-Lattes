
import {useEffect,useState} from 'react'
import Hero from './Components/Home/Hero';
import Menu from './Components/Home/Menu/Menu';
import Footer from './Components/Home/Footer';
import AboutUs from './Components/Home/AboutUs';
import Reviews from './Components/Home/Reviews';
import NavBar from './Components/Home/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import Reservation from './Components/Home/Reservation';
import ContactUs from './Components/Home/ContactUs';
function App() {

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true); 
      } else {
        setShowArrow(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className=" items-center justify-center h-screen bg-gray-100 font-merienda">
      <NavBar/>
      <div id="hero" >
      <Hero />
      </div>
      <div id="menu" >
      <Menu/>
      </div>
      <div id="about us">
      <AboutUs/>
      </div>
      <div id="reservation">
      <Reservation/>
      </div>
      <div id='reviews'>
      <Reviews/>
      </div>
      <div id='contactus' >
        <ContactUs/>
      </div>
      <Footer/>


    </div>
    
<div>
 {showArrow && (
  <button
    onClick={scrollToTop}
    
    aria-label="Scroll to top"
  >
 <FontAwesomeIcon    icon={faArrowUp} className="  fixed bottom-5 right-5 p-3   shadow-lg  focus:outline-none transition cursor-pointer   bg-peach text-bloody px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:bg-gray-500 text-4xl  mb-2 bounce-icon" />
  </button>
  
)}
</div>    
</>
  )
};

export default App;