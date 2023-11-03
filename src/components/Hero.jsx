import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Hero = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-mobile-bg md:bg-desktop-bg bg-cover bg-center h-[100vh] relative">
      <Navbar toggleMenu={toggleMenu} />
      {open && <MobileNav toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Hero;
