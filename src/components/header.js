import React from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
  const[openHam, setOpenHam] = useState(false);
  return (
   <>
   <header>
<nav className='flex justify-between items-center bg-[#0F0F0F] text-white px-[20px] py-[20px] text-2xl relative'>
<h2 className='font-dancing text-orange-500 text-lg '><a>Navigation Bar</a></h2>

{/* menus */}
<div className='hidden'>
    <ul>
        <li>Home</li>
        <li>News</li>
        <li>About Us</li>
        <li>Favourite</li>
        <li>Location</li>
        <li><button>Get Started</button></li>
    </ul>
</div>

{/* hamburger */}
<div onClick={() => {
  setOpenHam(true);
}}>
<IoMenu />
</div>
{/* in mobile */}
<div className={ `w-[80vw] h-[100vh] bg-[#0F0F0F] absolute right-0 top-0 z-50 backdrop-blur-[16px] ${openHam ? "block": "hidden" }`}>
  <div className='absolute top-[20px] right-[20px] cursor-pointer ' onClick={() => {
  setOpenHam(false);
}}><IoClose /></div>
<ul className='flex flex-col justify-start items-start text-white pt-[100px] pl-[40px] gap-[30px] text-base font-bold'  >
        <li>Home</li>
        <li>News</li>
        <li>About Us</li>
        <li>Favourite</li>
        <li>Location</li>
        <li><button>Get Started</button></li>
    </ul>
</div>
</nav>

   </header>
   </>
  )
}

export default Header;