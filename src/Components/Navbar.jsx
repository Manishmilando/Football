import React, { useState } from 'react';
import Logo from '/logo.png';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 sm:px-6 py-2 absolute z-20 w-full">
      <div className="flex items-center justify-between">
        
        <div>
          <img src={Logo} alt="logo" className='w-24 sm:w-32 md:w-40 h-auto' />
        </div>

        
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

       
        <ul className="hidden bebas-neue-regular md:flex space-x-4 lg:space-x-8 text-xl px-8">
          <li><a href="#" className="text-gray-300 hover:text-white">Place Details</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Match Schedule_Girls</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Match Schedule_Boys</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">List of Team</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Squad</a></li>
        </ul>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 bebas-neue-regular  bg-neutral-900/80 text-white outline-2 outline-white opacity-90 p-4 rounded-lg flex flex-col space-y-4  font-semibold relative">
       
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white">Place Details</a></li>
            <li><a href="#" className="hover:text-white">Match Schedule_Girls</a></li>
            <li><a href="#" className="hover:text-white">Match Schedule_Boys</a></li>
            <li><a href="#" className="hover:text-white">List of Team</a></li>
            <li><a href="#" className="hover:text-white">Squad</a></li>
          </ul>

          
        </div>
      )}
    </nav>
  );
}