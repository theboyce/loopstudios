import React from 'react';
import VrImage from '../assets/images/mobile/image-interactive.jpg';

const VrSection = () => {
  return (
    <div className=" md:px-[7rem] h-[100vh] flex justify-center items-center">
      <div className="sm:flex-col lg:flex-row flex items-end">
        <div className=" flex-1">
          <img src={VrImage} alt="" className="px-[1.5rem] lg:p-0 w-full" />
        </div>
        <div className="translate-x-0 flex-1 bg-white sm:h-auto lg:h-[350px] flex justify-center items-end lg:-translate-x-[12rem]">
          <div className="text-center px-[1.5rem] flex flex-col gap-6 py-8 lg:w-[80%">
            <h1 className="font-content text-[2rem] lg:text-[3.5rem] leading-tight">
              THE LEADER IN INTERACTIVE VR
            </h1>
            <p className="font-body lg:w-[69%]">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default VrSection;
