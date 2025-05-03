import React, { useState } from 'react';
import Logo from '/logo.png';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import '../App.css';
import Match from "./Match.jsx";
import Map from "../Components/Map.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handletableClick = () => setIsFormOpen(true);
  const handleMapClick = () => setIsMapOpen(true);

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
          <button onClick={handletableClick} className='text-white'>MATCH SCHEDULE </button>
          <button onClick={handleMapClick} className='text-white'>Map</button>
        </ul>
      </div>

      {isOpen && (
  <div className="md:hidden mt-4 bebas-neue-regular bg-neutral-900/80 text-white outline-2 outline-white opacity-90 p-4 rounded-lg flex flex-col space-y-4 font-semibold relative">
    <ul className="space-y-4">
      <div className='flex flex-col items-start text-2xl'>
      <button onClick={handletableClick} className='text-white'>MATCH SCHEDULE</button>
      <button onClick={handleMapClick} className='text-white'>Map</button>
      </div>
    </ul>
  </div>
)}

      {/* Match Schedule Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-30 overflow-y-auto">
          <div className="w-full max-w-6xl mx-auto bg-transparent outline-2 outline-white bg-opacity-5 backdrop-blur-md rounded-lg p-8 text-white relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-white bg-zinc-400 outline-2 outline-white hover:bg-red-700 px-3 py-1 rounded"
            >
              Close
            </button>
            <Match />
          </div>
        </div>
      )}

      {/* Map Modal - Responsive Optimization */}
      {isMapOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-30 px-4">
          <div className="w-full max-w-6xl mx-auto bg-transparent outline-2 outline-white bg-opacity-5 backdrop-blur-md rounded-lg p-4 sm:p-6 text-white relative overflow-y-auto
            max-h-[70vh] sm:max-h-[90vh] sm:w-[90%] md:w-[95%] lg:w-[100%]">
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 text-white bg-zinc-400 outline-2 outline-white hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Close
            </button>
            <Map />
          </div>
        </div>
      )}
    </nav>
  );
}
