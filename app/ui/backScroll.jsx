'use client'
import Logo from '@/app/assets/photo1.jpeg'
import React, { useEffect } from 'react'

const backgroundImages = [
  Logo,
  Logo,
  // Add more image paths here
];
const BackScroll = () => {
let backgroundCarousel = document?.querySelector('#background-carousel') 
function createBackgroundImage(imagePath, index) {
  const imageElement = document?.createElement('img');
  imageElement.src = imagePath;
  imageElement.classList.add('background-image');
  imageElement.style.opacity = 0; // Initially hide images

  imageElement.addEventListener('click', () => {
    // Handle click event for this image (e.g., display a message, navigate to a link)
    console.log('Clicked image', index + 1); // Example: Log image index
  });

  backgroundCarousel.appendChild(imageElement);
}

backgroundImages.forEach((imagePath, index) => createBackgroundImage(imagePath, index));

const backgroundImagesElements = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

function scrollBackground() {
  backgroundImagesElements[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  backgroundImagesElements[currentImageIndex].style.opacity = 1;
  window.requestAnimationFrame(scrollBackground);
}

useEffect(() => {
    scrollBackground()
 
}, [])


window.requestAnimationFrame(scrollBackground);


  return (
    <div id='background-carouselb'></div>
  )
}

export default BackScroll