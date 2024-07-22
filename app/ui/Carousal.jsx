"use client"
import React, { useEffect, useState } from 'react';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import Link from 'next/link';


/**
 * Carousel component.
 * @component
 * @param {object} props- Component props.
 * @param {Array<object>} props.slides - Array of slide objects.
 * @param {boolean} props.autoSlide - Auto slide flag.
 * @param {number} props.autoInterval - Auto slide interval.
 * @returns {jsx}
*/
const Carousel = ({ slides = [], autoSlide = false, autoInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length; // Pre-calculate slide count for efficiency


  const handlePrev = () => {
    const newSlideIndex = currentSlide === 0 ? slideCount - 1 : currentSlide - 1;
    setCurrentSlide(newSlideIndex);
  };

  const handleNext = () => {
    const newSlideIndex = currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    
    if (!autoSlide) return;

    const autoSlideInterval = setInterval(handleNext, autoInterval);

    return () => clearInterval(autoSlideInterval);
  }, [autoSlide, autoInterval, slideCount, currentSlide]); // Include slideCount in dependency array

  return (
    <div className="overflow-hidden relative  w-[19.2rem] h-[14.1rem]">
      <div
        className="flex transition-transform ease-out duration-500 mx-auto"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
     
      {slides.map((slide, i) => (
       
            <img
              key={slide.id || i}
              src ={ slide.image }
              height={400}
              width={400}
              loading='lazy'
              className='shrink-0 cursor-pointer mr-10 '
              alt='pics'
              
            />
            
           
          ))}
          </div>
          
      
      
      <div className="absolute inset-x-0 inset-y-20 flex  items-center p-4 justify-between">
        <button onClick={handlePrev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft fontSize="medium" />
        </button>
        <button onClick={handleNext} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight fontSize="medium" />
        </button>
      </div>
      <div className="absolute pt-8 right-0 left-0 bottom-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 ring-1 bg-white rounded-full ${(currentSlide === i ? " bg-blue-600" : "bg-opacity-50")}`}
            />
          ))}
        </div>
      </div>
      {/* <div className="absolute inset-4">
        <div className="flex items-center justify-start gap-2">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 text-blue-600 text-xl first-letter:capitalize  ${(currentSlide === i ? "p-2" : " hidden")}`}
            ><p>{slide.name}</p></div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
