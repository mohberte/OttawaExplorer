import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

function About() {
  return (
    <>
      <div className="w-full bg-black min-h-[50vh] mb-5 p-16 md:p-[6rem]" >
        <h1 className="text-white font-bold text-[1.6rem] md:text-[2rem] mb-5">
          Vision
        </h1>
        <p className="text-white text-md font-regular md:text-lg">
          A safer Ottawa for travellers and residents by offering a
          cutting-edge safety navigation and tourism application. We aim to
          encourage individuals to move freely while feeling protected. Through
          our innovative features and advanced data integration, we aim to
          revolutionize the travel experience.
        </p>
        <br />
        <p className="text-white text-md font-regular">
          We aspire to be the go-to platform for both tourists and residents,
          assisting them in navigating the city safely while enjoying the city.
          With a strong emphasis on user privacy and data security, we
          prioritize building trust and fostering long-term relationships with
          our users and partners.
        </p>
      </div>
      <div className="w-full h-auto bg-white text-black p-16 md:p-[6rem]">
        <h1 className="font-bold text-[1.6rem] md:text-[2rem] mb-5">Mission</h1>
        <p className="text-md font-regular md:text-lg">
          The Gatinois app empowers explorers and tourists, both
          local and international, with the tools they need to navigate Cape
          Town confidently and securely. Through our innovative safety
          information and tourism application, we deliver tailored safety
          insights and tips to offer precautionary guidance against
          opportunistic crime in specific areas. Beyond safety, we curate
          personalized recommendations for activities and dining establishments
          within each unique locale.{" "}
        </p>
        <br />
        <p className="text-md font-regular">
          Our purpose is clear: to enhance the  Ottawa experience by equipping
          users with preventative knowledge, fostering a sense of security, and
          illuminating the exceptional offerings of this vibrant city. At
          OttawaExplorer, we are dedicated to crafting a journey where safety and
          exploration harmonize, instilling a profound sense of well-being and
          appreciation for all that Ottawa has to offer.
        </p>
      </div>
    </>
  );
}

export default About;
