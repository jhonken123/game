'use client'
import { useState } from "react";
import React from 'react'

const Carouselproduct = () => {
  const images = [
    { src:'laia-nunez-AThSwV0LsCQ-unsplash.jpg',width: 300, height: 200 },
    { src:'mg-cthu--1h_NN3nqzI-unsplash.jpg',width: 300, height: 200 },
    { src:'nattu-adnan-vvHRdOwqHcg-unsplash.jpg',width: 300, height: 200 },
    { src:'nicolette-meade-RL3F99l0XYE-unsplash.jpg',width: 300, height: 200 },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleButtonClick = (index: number) => {
    setCurrentImage(images[index]);
  };

  return (
    <div className="carousel-container">
      {/* Carousel wrapper */}
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${currentImage === image ? 'active' : ''}`}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{ width: image.width, height: image.height }}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <div className="button-container">
        {images.map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {`Show Image ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carouselproduct
