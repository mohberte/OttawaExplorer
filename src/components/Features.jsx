import React from "react";

import Feature2 from "../assets/Icon-1.svg";
import Feature5 from "../assets/Icon-4.svg";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Features = () => {
  return (
    <div
      data-aos="fade-in"
      id="features"
      className="h-auto w-full lg:h-[100vh]"
    >
      <h1 className="text-black text-center font-bold text-[30px] p-[5rem] md:pl-[6rem] lg:text-[40px] lg:text-left">
        Our Features
      </h1>

      <div className="flex flex-col mt-0 pt-0 p-[5rem] h-full md:flex-row md:justify-between lg:mt-auto lg:mb-auto">
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature2}
              alt="Feature 2 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Landmark Locations
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[277px]  mr-auto ml-auto">
            See the beautiful locations in Ottawa
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature5}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Information on Restaurants
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[280px] mr-auto ml-auto">
              Discover culinary wonders with curated restaurant recommendations
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature5}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Information on Activities
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[260px] mr-auto ml-auto">
              Explore current activities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
