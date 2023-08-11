import React from "react";
import DiscoveryCarousel from "../components/DiscoveryCarousel";
import picture1 from "../assets/aviation1.jpg";
import picture2 from "../assets/beckta.jpg";
import picture3 from "../assets/gezellig.jpeg";
import picture4 from "../assets/Sansotei.jpg";
import picture5 from "../assets/building.jpg";
import picture6 from "../assets/church.jpg";
import picture7 from "../assets/museum.jpg";
import picture8 from "../assets/aperitivo.jpg";
import picture9 from "../assets/ottawa2.jpg";



function OurApp() {
  return (
    <>
      <div className="bg-black min-h-[40vh] p-5 flex flex-row justify-center align-middle pt-[4rem] pb-[4rem]">
        <img
          src={picture9}
          alt="Ottawa
 image"
          className="rounded-sm"
          width="500"
          height="300"
        />
      </div>
      <div className="bg-white text-back p-16">
        <p className="text-md md:text-lg" data-aos="fade-right">
        About Ottawa
        Ottawa is a compact, clean, cleverly planned centre of culture and politics. 
        And it's an ideal choice for a weekend getaway. 
        Start downtown at the architecturally stunning National Gallery of Canada, 
        and don't miss the Canadian Nature Museum and the National Aviation Museum. 
        Rideau Canal offers boating in the summer and ice-skating in the winter. 
        Ottawa Park attracts cyclists and walkers, while Byward Market blends old 
        </p>
        <br />
        
        <br />
        <br />
      </div>
      
      <div className="h-auto w-full bg-white text-black">
        <h1 className="text-[1.6rem] md:text-[2rem] md:pt-8 font-bold p-12">
        Discover
        </h1>
        <div className="flex flex-col items-center pt-16 pb-16 px-8">
    <img
        src={picture1}
        alt="Ottawa image"
        className="rounded-sm"
        width="500"
        height="300"
    />
    <p className="text-center mt-2">Aviation museum</p>
</div>

        <p className=" p-12 md:text-lg" data-aos="fade-left">
        Ottawa, a city of enchanting vistas, 
        offers a myriad of captivating attractions that beckon to both locals and visitors alike. 
        Immerse yourself in the world of aviation history at the awe-inspiring aviation museums that dot the city, 
        such as the Canada Aviation and Space Museum. 
        Here, the past comes alive through meticulously restored aircraft, 
        chronicling the evolution of flight and showcasing the ingenuity that shaped modern aviation.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center pt-12 pb-16 gap-16 px-8">
    <div className="flex flex-col items-center">
        <img
            src={picture5}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="300"
            height="300"
        />
        <p className="text-center mt-2">Museum</p>
    </div>
    <div className="flex flex-col items-center">
        <img
            src={picture6}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="300"
            height="300"
        />
        <p className="text-center mt-2">Church</p>
    </div>
    <div className="flex flex-col items-center">
        <img
            src={picture7}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="300"
            height="300"
        />
        <p className="text-center mt-2">Museum</p>
    </div>
</div>

      </div>
      <div className="bg-black w-full h-auto text-white p-4">
        <h className="text-[1.2rem] md:text-[2rem] md:pt-8 font-bold p-8">
        Eat: Can't-miss spots to dine, drink, and feast.
        </h>
        <div className="pt-[3rem] flex flex-col md:flex-row justify-around align-middle p-8">
          <img
            src={picture3}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="500"
            height="300"
          />
        </div>
        <p className="pt-10 p-5 md:text-lg" data-aos="fade-left">
          Discover thrilling activities curated just for you, ensuring
          excitement at every turn. OttawaExplorer offers a wide range of
          adrenaline-pumping experiences in Ottawa, accompanied by valuable
          safety tips to keep you secure while you explore. Embrace the thrill
          of adventure without compromising on safety. The fun awaits, so let's
          play it safe!
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center pt-12 pb-16 gap-16 px-8">
    <div className="flex flex-col items-center">
        <img
            src={picture4}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="300"
            height="300"
        />
        <p className="text-center mt-2">Sansotei</p>
    </div>
    <div className="flex flex-col items-center">
        <img
            src={picture2}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="300"
            height="300"
        />
        <p className="text-center mt-2">Bekta</p>
    </div>
    <div className="flex flex-col items-center">
        <img
            src={picture8}
            alt="Ottawa
   image"
            className="rounded-sm"
            width="270"
            height="300"
        />
        <p className="text-center mt-2">Aperito</p>
    </div>
</div>
<DiscoveryCarousel/>
      </div>
    </>
  );
}

export default OurApp;
