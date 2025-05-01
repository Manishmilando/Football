import React from 'react';
import Footballl from '/footballl.png';
import Foottext from '/foottext.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Social from './Components/Social';
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function App() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-[#597544]'>
      <Navbar />
      <Social />

      
      <div className='mx-auto  w-full max-w-full h-[99.9vh] border-2 border-white'>
        <img src={Footballl} alt="Football" className='w-full h-full object-cover' />
      </div>

     
      <div className='hidden md:block absolute top-38.5 -left-36 w-[60%] max-w-[450px] h-auto text-white'>
        <img src={Foottext} alt="Football" className='w-full h-full opacity-85' />
      </div>

      
      <div className='hidden md:block absolute -right-2 top-[60%] w-[250px] bg-neutral-600/20 text-white opacity-90 border-3 border-white p-4 rounded-lg'>
        <div className='flex items-center justify-center space-x-4'>
          <GiTrophyCup className='text-xl' />
          <p className='bebas-neue-regular text-xl'>NEXT GAME</p>
        </div>
        <div className='border border-white w-3/4 mx-auto my-2' />
        <div className='text-center pt-2'>
          <p className='bebas-neue-regular text-lg'>NOVEMBER, 21</p>
          <p className="bebas-neue-regular text-4xl">15:02</p>
        </div>
      </div>

     
      <MdOutlineDoubleArrow className='hidden md:block text-white absolute bottom-24 right-8 text-3xl' />

     
      <div className='absolute flex flex-col items-center gap-4 bottom-10 left-1/2 transform -translate-x-1/2 '>
      <div className="flex flex-row gap-2 sm:gap-4 lg:gap-8">
  <button className="w-[120px] sm:w-[150px] lg:w-[190px] h-10 sm:h-11 lg:h-12 bebas-neue-regular text-gray-200 text-base sm:text-xl lg:text-2xl tracking-wider rounded-md border-3 border-gray-300 bg-transparent">
    Register NOW
  </button>
  <button className="w-[120px] sm:w-[150px] lg:w-[190px] h-10 sm:h-11 lg:h-12 bebas-neue-regular text-gray-200 text-base sm:text-xl lg:text-2xl tracking-wider rounded-md border-3 border-gray-300 bg-transparent">
    Book Ticket
  </button>
</div>

        <div className='md:hidden flex justify-center space-x-6 mt-4 text-white'>
          <a href="#" className="text-2xl"><FaFacebook /></a>
          <a href="#" className="text-2xl"><FaTwitterSquare /></a>
          <a href="#" className="text-2xl"><CgMail /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
