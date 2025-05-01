import React, { useState } from 'react';
import Logo from '/logo.png';
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 sm:px-6 py-2 absolute z-20 w-full">
      <div className="flex items-center justify-between">
        {/* Logo - stays on the left */}
        <div>
          <img src={Logo} alt="logo" className='w-24 sm:w-32 md:w-40 h-auto' />
        </div>

        {/* Hamburger Icon - shown on mobile */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 font-semibold">
          <li><a href="#" className="text-gray-300 hover:text-white">Place Details</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Match Schedule_Girls</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Match Schedule_Boys</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">List of Team</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Squad</a></li>
        </ul>
      </div>

      {/* Mobile Nav - Slide Down */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#1a1a1a] p-4 rounded-lg flex flex-col space-y-4 text-gray-300 font-semibold relative">
          {/* Menu Items */}
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white">Place Details</a></li>
            <li><a href="#" className="hover:text-white">Match Schedule_Girls</a></li>
            <li><a href="#" className="hover:text-white">Match Schedule_Boys</a></li>
            <li><a href="#" className="hover:text-white">List of Team</a></li>
            <li><a href="#" className="hover:text-white">Squad</a></li>
          </ul>

          {/* Action Buttons at Bottom */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="w-1/2 py-2 text-sm text-gray-200 border border-gray-300 rounded-md">Register NOW</button>
            <button className="w-1/2 py-2 text-sm text-gray-200 border border-gray-300 rounded-md">Book Ticket</button>
          </div>
        </div>
      )}
    </nav>
  );
}