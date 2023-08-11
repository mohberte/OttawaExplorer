import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import OttawaExplorer from "../assets/black-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-[#0A0A0A]">
      <div className="px-4 lg:px-14 mx-auto flex justify-between items-center h-full">
        <motion.div
          initial={{ x: "-200px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="ml-7 mt-5 md:mt-12">
            <img
              src={OttawaExplorer}
              alt="Onesheet Logo"
              className="w-[64px] hover:cursor-pointer p-0 xl:p-0"
            />
            
          </h1>
        </motion.div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <motion.a
              href="/"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#41B22F] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </motion.a>
            <motion.a
              href="/about"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#41B22F] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </motion.a>
            <motion.a
              href="/app"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#41B22F] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Explore
              </li>
            </motion.a>
            
          </ul>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          initial={{ y: "-200px" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="block md:hidden"
          onClick={handleNav}
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-[95vw] rounded-md bg-white text-[#137703] absolute top-[50px] left-0 flex justify-center text-center ml-1 mt-2 md:hidden lg:hidden xl:hidden"
              : // try 'hidden' instead of below
                "absolute left-[-100%]"
          }
        >
          <ul>
            <a href="/">
              <li className="text-2xl pt-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </a>
            <a href="/about">
              <li className="text-2xl pt-8 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </a>
            <a href="/app">
              <li className="text-2xl pt-8 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                App
              </li>
            </a>
            <a href="/store">
              <li className="text-2xl pt-8 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Store
              </li>
            </a>
            <a href="/blog">
              <li className="text-2xl pt-8 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Blog
              </li>
            </a>
            <a href="/support">
              <li className="text-2xl pt-8 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Support
              </li>
            </a>
            <a href="/contact">
              <li className="text-2xl pt-8 pb-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
