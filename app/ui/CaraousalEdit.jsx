"use client"
import React, { memo, useEffect, useState } from 'react';
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
const CarouselEdit = ({ slides = [], autoSlide = false, autoInterval = 3000 }) => {
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
    <div className="overflow-hidden relative  w-[16rem] h-[18rem]  mx-auto">
      <div
        className="flex transition-transform ease-out duration-500 space-x-20 mx-auto"
        style={{ transform: `translateX(-${currentSlide * 131.5}%)` }}
      >
      
      {slides.map((slide, i) => (
           <div key={i} className='block  relative mx-auto'>
           <div className='w-[16rem] h-[17rem]'>
            <img
              key={slide.id || i}
              src ={ slide.image }
              height={300}
              width={400}
              loading='lazy'
              className='shrink-0 cursor-pointer   rounded-lg mx-auto  h-[17rem] w-[16rem]'
              alt='pics'
              
            />
            </div>
            <div className='absolute top-4'>
            <p>hhhhh</p>
            </div>
            
            </div>
           
          ))}
         
          </div>
          
      
      
      <div className="absolute inset-x-0 inset-y-16 flex  items-center p-4 justify-between">
        <button onClick={handlePrev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft fontSize="medium" />
        </button>
        <button onClick={handleNext} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight fontSize="medium" />
        </button>
      </div>
      <div className="absolute pt-8 right-0 left-0 bottom-1">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 ring-1  rounded-full ${(currentSlide === i ? " bg-blue-600" : "bg-opacity-50")}`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default CarouselEdit;
