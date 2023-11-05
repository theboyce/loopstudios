import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Hero = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-mobile-bg md:bg-desktop-bg bg-cover bg-center h-[100vh] md:h-[70vh] relative px-[1.5rem] md:px-[7rem]">
      <Navbar toggleMenu={toggleMenu} />
      {open && <MobileNav toggleMenu={toggleMenu} />}

      {/* if open is true, set overflow hidden y on the hero */}

      <div className="mt-[6rem] lg:absolute top-[12rem] p-[1.5rem] lg:w-[38%] border-solid border-2 border-white lg:px-[2rem] lg:py-[2rem] lg:top-[18rem]">
        <p className="text-[40px] lg:text-[72px] inline font-content text-white leading-tight">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </p>
      </div>
    </div>
  );
};

export default Hero;
