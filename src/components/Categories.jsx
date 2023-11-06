import React from 'react';
import DeepEarth from '../assets/images/desktop/image-deep-earth.jpg';
import DeepEarthMob from '../assets/images/mobile/image-deep-earth.jpg';
import NightArcade from '../assets/images/desktop/image-night-arcade.jpg';
import NightArcadeMob from '../assets/images/mobile/image-night-arcade.jpg';
import SoccerTeam from '../assets/images/desktop/image-soccer-team.jpg';
import SoccerTeamMob from '../assets/images/mobile/image-soccer-team.jpg';
import TheGrid from '../assets/images/desktop/image-grid.jpg';
import TheGridMob from '../assets/images/mobile/image-grid.jpg';
import FromAbove from '../assets/images/desktop/image-from-above.jpg';
import FromAboveMob from '../assets/images/mobile/image-from-above.jpg';
import Pocket from '../assets/images/desktop/image-pocket-borealis.jpg';
import PocketMob from '../assets/images/mobile/image-pocket-borealis.jpg';
import Curiosity from '../assets/images/desktop/image-curiosity.jpg';
import CuriosityMob from '../assets/images/mobile/image-curiosity.jpg';
import FishEye from '../assets/images/desktop/image-fisheye.jpg';
import FishEyeMob from '../assets/images/mobile/image-fisheye.jpg';

const Categories = () => {
  const categories = [
    {
      desktopImage: DeepEarth,
      mobileImage: DeepEarthMob,
      name: 'DEEP EARTH',
    },
    {
      desktopImage: NightArcade,
      mobileImage: NightArcadeMob,
      name: 'NIGHT ARCADE',
    },
    {
      desktopImage: SoccerTeam,
      mobileImage: SoccerTeamMob,
      name: 'SOCCER TEAM VR',
    },
    {
      desktopImage: TheGrid,
      mobileImage: TheGridMob,
      name: 'THE GRID',
    },
    {
      desktopImage: FromAbove,
      mobileImage: FromAboveMob,
      name: 'FROM UP ABOVE VR',
    },
    {
      desktopImage: Pocket,
      mobileImage: PocketMob,
      name: 'POCKET BOREALIS ',
    },
    {
      desktopImage: Curiosity,
      mobileImage: CuriosityMob,
      name: 'THE CURIOSITY',
    },
    {
      desktopImage: FishEye,
      mobileImage: FishEyeMob,
      name: 'MAKE IT FISHEYE',
    },
  ];

  /* Filter the first object of the array. so if the index of the object is not equal to that of the first object, it should return a new array without the first element and map over the new array/ */

  return (
    <div>
      <div className="px-[7rem] sm:hidden lg:block mb-[10rem]">
        <div className="flex justify-between items-center mb-[4rem]">
          <h2 className="text-[3rem] font-content ">OUR CREATIONS</h2>
          <button className="border text-black border-black px-14 py-3 font-content">
            SEE ALL
          </button>
        </div>
        {/* desktop cards */}
        <div className="lg:grid grid-cols-4 gap-6">
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <div className="relative bg-gradient-to-t from-blue-500">
                  <img
                    src={category.desktopImage}
                    alt=""
                    className="w-[100%]"
                  />
                  <h2 className="w-[13rem] text-white font-content text-[2.5rem] absolute bottom-[3rem] left-[3rem]">
                    {category.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* mobile cards */}
      <div className="flex flex-col items-center lg:hidden px-[1.5rem] mb-[5rem]">
        <h2 className="text-[2rem] font-content">OUR CREATIONS</h2>
        <div className="grid grid-cols-1 gap-6">
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <div className="relative">
                  <img src={category.mobileImage} alt="" />
                  <h2 className="font-content text-white  text-[1.5rem] absolute bottom-[1rem] left-[1rem] w-[40%]">
                    {category.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <button className="border border-black px-12 py-2 mt-8">SEE ALL</button>
      </div>
    </div>
  );
};

export default Categories;
