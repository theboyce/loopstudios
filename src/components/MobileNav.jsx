import React from 'react';
import Logo from './Logo';

const MobileNav = ({ toggleMenu }) => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black flex flex-col justify-around gap-10 px-[1.5rem] py-2 absolute top-0 md:hidden">
      <div className="flex justify-between">
        <Logo />
        <svg
          onClick={() => toggleMenu()}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <nav>
        <ul className="flex flex-col gap-14 justify-center">
          <li className="font-content font-bold text-white text-[24px]">
            ABOUT
          </li>
          <li className="font-content font-bold text-white text-[24px]">
            CAREERS
          </li>
          <li className="font-content font-bold text-white text-[24px]">
            EVENTS
          </li>
          <li className="font-content font-bold text-white text-[24px]">
            PRODUCTS
          </li>
          <li className="font-content font-bold text-white text-[24px]">
            SUPPORT
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
