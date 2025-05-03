import React, { useEffect, useState } from "react";
import '../App.css';

const bhagalpurQuotes = [
  "Begusarai — where football isn’t just a game,\nit’s a way of life.",
"From local grounds to roaring stadiums,\nBegusarai breathes football.",
"In every kick, pass, and cheer,\nBegusarai's spirit comes alive.",
"Where youth chase dreams with a ball at their feet,\nand pride in their hearts.",
"Begusarai unites under the floodlights,\nwhere every match tells a story.",

];

export default function BhagalpurQuotes() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % bhagalpurQuotes.length); // update quote
        setFade(true); // fade-in new quote
      }, 500); // wait for fade-out to finish
    }, 6000); // 8-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-98  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 sm:top-1/2 lg:top-1/2">
      <p
        className={`whitespace-pre-line text-white text-xl  sm:text-2xl lg:text-4xl bebas-neue-regular  tracking-wide transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {bhagalpurQuotes[index]}
      </p>
    </div>
  );
}
