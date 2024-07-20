import React from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
  const [openHam, setOpenHam] = useState(false);
  return (
    <>
      <header>
        <nav className='flex justify-between items-center bg-[#0F0F0F] text-white px-[20px] py-[20px] text-2xl relative w-[100vw]'>
          <h2 className='font-dancing text-orange-500 text-lg '><a>Navigation Bar</a></h2>

          {/* menus */}
          <div className='hidden lg:block'>
            <ul className='flex justify-end items-center text-white gap-[30px] text-base font-bold'>
              <li className='cursor-pointer hover:text-red-400 '>Home</li>
              <li className='cursor-pointer hover:text-red-400 '>News</li>
              <li className='cursor-pointer hover:text-red-400 '>About Us</li>
              <li className='cursor-pointer hover:text-red-400 '>Favourite</li>
              <li className='cursor-pointer hover:text-red-400 '>Location</li>
              <li className='cursor-pointer hover:text-red-400 '><button className='bg-[#F39849] px-[25px] py-[10px] rounded-[5px] hover:bg-[#EFFD5F] hover:text-black'>Get Started</button></li>
            </ul>
          </div>

          {/* hamburger */}
          <div onClick={() => setOpenHam(true)} className='lg:hidden'>
            <IoMenu />
          </div>
          {/* in mobile */}
          {
            openHam && (
              <div className={`w-[80vw] h-[100vh] bg-[#0F0F0F] absolute right-0 top-0 z-50 backdrop-blur-[16px] transition-all duration-500 ${openHam ? "block" : "hidden"}`}>
                <div className='absolute top-[20px] right-[20px] cursor-pointer' onClick={() => {
                  setOpenHam(false);
                }}><IoClose /></div>
                <ul className='flex flex-col justify-start items-start text-white pt-[100px] pl-[40px] gap-[30px] text-base font-bold'  >
                  <li className='cursor-pointer hover:text-red-400 '>Home</li>
                  <li className='cursor-pointer hover:text-red-400 '>News</li>
                  <li className='cursor-pointer hover:text-red-400 '>About Us</li>
                  <li className='cursor-pointer hover:text-red-400 '>Favourite</li>
                  <li className='cursor-pointer hover:text-red-400 '>Location</li>
                  <li className='cursor-pointer hover:text-red-400 '><button className='bg-[#F39849] px-[25px] py-[10px] rounded-[5px] hover:bg-[#EFFD5F] hover:text-black'>Get Started</button></li>
                </ul>
              </div>
            )
          }
        </nav>

      </header>
    </>
  )
}

export default Header;