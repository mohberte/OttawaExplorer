import React from "react";

// import components
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import Companies from "../components/Companies";
//  import PictureCarousel from "../components/PictureCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      {/* <PictureCarousel/> */}
      <Pricing />
    </>
  );
};

export default Home;
