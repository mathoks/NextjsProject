import React, { useEffect, useState } from 'react';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

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
    <div className="overflow-hidden relative h-[34rem]">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
     
      {slides.map((slide, i) => (
            
            <Image
              key={slide.id || i}
              src ={slide.pics}
              height={400}
              width={400}
              loading='lazy'
              className='shrink-0  w-auto'
             
            />
            
            
          ))}
          </div>
          
      
      
      <div className="absolute inset-0 -top-24 flex items-center p-4 justify-between">
        <button onClick={handlePrev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft fontSize="medium" />
        </button>
        <button onClick={handleNext} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight fontSize="medium" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${(currentSlide === i ? "p-2" : "bg-opacity-50")}`}
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
