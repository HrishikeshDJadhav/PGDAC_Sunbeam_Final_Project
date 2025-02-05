import React from "react";
import HeroImg from "../../assets/img/hero-img.png";

export const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover justify-start bg-center text-left h-screen w-full "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0"></div>
      <main className="px-10 lg:px-24 z-10">
        <div className="text-left">
          <h2 className=" font-thin text-2xl text-white">T-Shirt / Tops</h2>
        </div>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-7xl">Summer </p>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-7xl">
          Value Pack{" "}
        </p>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl">
          Cool / Colorful / Comfy
        </p>
        <button className="border rounded-full mt-6 hover:border-black border-white hover:text-white hover:bg-black text-black bg-white w-44 h-12">
          Shop Now
        </button>
      </main>
    </div>
  );
};
