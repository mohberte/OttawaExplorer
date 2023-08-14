import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import Product1 from "../assets/product1.png";
import customBackgroundImage from "../assets/ottawa1.jpg";


const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 20, 0],
      transition: { duration: 5, repeat: Infinity },
    });
  }, []);

  return (
    <motion.div
      id="hero"
      className="w-full h-full pb-[10rem] md:pb-[16.5rem] overflow-x-hidden"
      style={{ backgroundImage: `url(${customBackgroundImage})`, backgroundSize: 'cover' }}
   
    >
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[6rem] lg:pt-[4rem]">
        <motion.div className="flex flex-col pl-[3.3rem] lg:pl-[6rem] lg:pt-8">
          <motion.h1
            initial={{ x: "-200px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-[38px] max-w-[220px] lg:max-w-[508px] text-black font-bold text-left leading-tight mb-8 lg:text-[52px]"
          >
            Embarking on a Journey of Discovery
          </motion.h1>
          <div className="flex flex-row">
            <div className="hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
              <motion.button
                initial={{ x: "-200px" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[115px] h-[41px] rounded-[5px] bg-white mr-3 border-white border-2 text-[#41B22F]  lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:scale-105"
              >
                <a href="#community">Get Started</a>
              </motion.button>
            </div>
            <div className="hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
              <motion.button
                initial={{ x: "-200px" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[115px] h-[41px] rounded-[5px] bg-[#41B22F] text-white lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:hover:scale-105"
              >
                <a href="#features">Learn More</a>
              </motion.button>
            </div>
          </div>
        </motion.div>

       
      </div>
    </motion.div>
  );
};

export default Hero;
