import React from 'react';
import Logo from './Logo';

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="px-[1.5rem] md:px-[7rem] h-[8rem]">
      <nav className="flex justify-between items-center h-[100%] ">
        <Logo />
        <ul className="sm:hidden md:flex justify-between gap-10 ">
          <li className="font-content font-bold text-white text-[15px]">
            About
          </li>
          <li className="font-content font-bold text-white text-[15px]">
            Careers
          </li>
          <li className="font-content font-bold text-white text-[15px]">
            Events
          </li>
          <li className="font-content font-bold text-white text-[15px]">
            Products
          </li>
          <li className="font-content font-bold text-white text-[15px]">
            Support
          </li>
        </ul>
        <svg
          onClick={() => toggleMenu()}
          className="md:hidden"
          width="24"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
          </g>
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
