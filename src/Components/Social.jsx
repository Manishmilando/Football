import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Social() {
  return (
    <div className='hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2'>
      <ul className='flex flex-col items-center space-y-6'>
        <li><a href='#' className="text-gray-400 hover:text-white text-xl md:text-2xl"><FaFacebook /></a></li>
        <li><a href='#' className="text-gray-400 hover:text-white text-xl md:text-2xl"><FaTwitterSquare /></a></li>
        <li><a href='#' className="text-gray-400 hover:text-white text-xl md:text-3xl"><CgMail /></a></li>
      </ul>
    </div>
  );
}

export default Social;
