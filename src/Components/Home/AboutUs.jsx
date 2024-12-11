import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faLocationPin , faCheck } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {



  return (

    <div className="relative h-screen bg-black text-white flex  items-center px-6 md:px-16">

      {/* Left Section: Text Content */}
    
      <div className="flex-1 space-y-6">

        <h2 className="text-bloody  md:text-4xl font-semibold">About Us</h2>

        <h1 className=" text-peach text-3xl md:text-5xl font-bold leading-snug">

        Casual restaurant with indoor & sidewalk dining  <br/>

        serving New Yorkstyle pizza & craft beer

        </h1>

        <p className="text-gray-400 text-sm md:text-base">

            <h1> <FontAwesomeIcon   icon={faLocationPin}/>   1028 W Diversey Pkwy, Chicago, IL 60614, United States</h1> 
        <br/>
        
       
         <FontAwesomeIcon   icon={faPhone}/>    +1 773-687-8505    
         </p>
         <div className='grid grid-cols-2 gap-1 justify-between align-center'>
        
         <h1><FontAwesomeIcon   icon={faCheck}/>  Outdoor seating</h1>
         <h1> <FontAwesomeIcon   icon={faCheck}/>Delivery </h1>
         <h1>  <FontAwesomeIcon   icon={faCheck}/>Takeaway </h1>
         <h1> <FontAwesomeIcon   icon={faCheck}/>Dine-in </h1>
        
         </div>

      </div>

      {/* Right Section: Image */}

      <div className="ml-61">
        <div className="flex flex-row h-auto justify-around items-center">
          {/* Image on the left */}
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipNt67h5-htbNjUQ4wf7qwqeU-50QiEsCU3-9kQr=w203-h270-k-no"
            alt=""
            className=" rounded mr-10  w-[318px] h-[530px]"
          />

          {/* Column with two images on the right */}
          <div className="flex flex-col h-auto justify-between space-y-12">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipNdEcTKSBq4dqXaVB7To8uBrG1YuiyWFBdPqIEW=w203-h134-k-no"
              alt=""
              className=' rounded w-[318px] h-[227px]'
            />
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipMZMZlUl_hOR3KOOAEGI8bwi8k_qBYfEwqwWMRG=w209-h100-k-no"
              alt=""
              className='  rounded-lg w-[318px] h-[227px]'
            />
          </div>
        </div>
      </div>


    </div>

  );

};



export default AboutUs;