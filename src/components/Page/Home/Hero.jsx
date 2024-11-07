import React from "react";
import Corner from "../../../assets/home/corner.png";
import Net from "../../../assets/home/net.png";
import Motto from "../../../assets/home/motto.png";
const Hero = () => {
  return (
    <section className="realtive z-1 flex h-screen flex-col items-center justify-between">
      <img src={Corner} alt="corner" className="absolute left-0 top-0 z-0" />
      <div className="z-1 relative flex h-full flex-col items-center justify-center">
        <img src={Motto} alt="motto" className="w-60 md:w-full lg:mt-36" />
        <h1 className="mb-8 mt-8 text-2xl font-bold text-white">Lets aim the skies!!</h1>
      </div>
      <div className="h-60 w-full">
        <img src={Net} alt="net" className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
