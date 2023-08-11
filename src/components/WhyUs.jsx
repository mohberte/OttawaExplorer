import React from "react";

// import Product2 from "../assets/product2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhyUs = () => {
  return (
    <div
      id="aboutus"
      className=" h-auto w-full bg-[#0A0A0A] overflow-clip mr-auto ml-auto"
    >
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[30px] md:text-[40px] text-center font-bold text-white lg:text-left">
          About Us
        </h1>
        <p className="text-[16px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#FDFDFD] pt-[3rem] font-light mr-auto ml-auto">
        OttawaExplorer: Your Ultimate Travel Companion
Discover a curated selection of top-notch restaurants and activities at your destination with 
Gatinois. We're on a mission to make every journey memorable and enriching. 
Our commitment lies in guiding you with confidence and tranquility

          <br />
          <br />
           We provide you with a refined list of recommended restaurants,
           activities, and landmarks. Whether you're a novice traveler or a seasoned adventurer, 
           our app ensures you make the most of your destination. Join us in enhancing your exploration, 
          as we guide you towards enriching experiences that leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
