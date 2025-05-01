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

      {/* Hero Section: Adjusted height for mobile to 80vh, scaling up on larger screens */}
      <div className='mx-auto mt-2 border-4 border-white rounded-3xl w-[95%] max-w-[1520px] h-[90vh] /* <- updated: mobile height */ sm:h-[85vh] /* <- updated: small breakpoint */ md:h-[90vh] /* <- updated: medium breakpoint */ lg:h-[95vh] /* <- updated: large breakpoint */'>
        <img src={Footballl} alt="Football" className='w-full h-full object-cover rounded-3xl' />
      </div>

      {/* Show Foottext only on medium and up */}
      <div className='hidden md:block absolute top-10 left-4 w-[60%] max-w-[450px] h-auto text-white'>
        <img src={Foottext} alt="Football" className='w-full h-full opacity-80' />
      </div>

      {/* Next Game Box - hidden on small screens */}
      <div className='hidden md:block absolute right-4 top-[60%] w-[250px] bg-neutral-600/20 text-white opacity-90 border border-white p-4 rounded-lg'>
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

      {/* Arrow Icon - hidden on small screens */}
      <MdOutlineDoubleArrow className='hidden md:block text-white absolute bottom-24 right-8 text-3xl' />

      {/* Buttons visible always, positioned lower on mobile */}
      <div className='absolute flex flex-wrap justify-center items-center gap-4 bottom-20 left-1/2 transform -translate-x-1/2'>
        <button className='w-[140px] h-12 bebas-neue-regular text-gray-200 text-lg tracking-wider rounded-md border border-gray-300 bg-transparent'>Register NOW</button>
        <button className='w-[140px] h-12 bebas-neue-regular text-gray-200 text-lg tracking-wider rounded-md border border-gray-300 bg-transparent'>Book Ticket</button>
        
      {/* Mobile Footer with Social Links */}
      <footer className='md:hidden absolute bottom-0 w-full py-4 bg-black/40 flex justify-center space-x-8 text-white'>
        <a href="#" className="text-xl"><FaFacebook /></a>
        <a href="#" className="text-xl"><FaTwitterSquare /></a>
        <a href="#" className="text-xl"><CgMail /></a>
      </footer>
      </div>

    </div>
  );
}

export default App;