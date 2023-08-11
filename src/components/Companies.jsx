import React from "react";

// import logos
import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhatWeOffer = () => {
  return (
    <div id="whatweoffer" className=" h-auto w-full bg-[white overflow-clip">
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[30px] md:text-[40px] text-center font-bold text-black lg:text-left">
          What We Offer
        </h1>
        <p className="text-[16px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#5E5E5E] pt-[3rem] font-light mr-auto ml-auto">
          <strong className="font-bold">Empowering Safety Insights</strong>{" "}
          <br /> Discover valuable safety insights and make informed travel
          decisions. Our advanced technology color-codes areas of Ottawa
          based on safety levels, helping you navigate with ease.
          <br />
          <br />
          <br />
          <strong className="font-bold">Comprehensive Safety Tips</strong>{" "}
          <br />
          Stay safe while enjoying Ottawa with tailored safety tips. From
          general guidelines to location-specific advice, our app equips you
          with essential knowledge and precautions.
          <br />
          <br />
          <br />
          <strong className="font-bold">
            Curated Recommendations
          </strong> <br /> Experience the best of Ottawa's culinary scene and
          activities. We offers curated recommendations that meet high
          safety standards, ensuring you discover hidden gems and popular
          attractions with confidence.
          <br />
          <br />
          <br />
          <strong className="font-bold">User-Friendly Interface</strong> <br />
          Enjoy a seamless experience with our user-friendly app. Whether you're
          tech-savvy or prefer simplicity and a reliable companion
          throughout your Ottawa adventure.
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
