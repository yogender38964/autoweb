// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import '../css/clientsList.css';

// Import local images
import image1 from '../Image/download.png';
import image2 from '../Image/download1.png';
import image3 from '../Image/download.png';
import image4 from '../Image/download1.png';
import image5 from '../Image/download.png';
import image6 from '../Image/download1.png';
import image7 from '../Image/download.png';
import image8 from '../Image/download1.png';
import image9 from '../Image/download.png';
import image10 from '../Image/download1.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];

const ClientsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 5; // Number of images to show at a time

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + images.length) % images.length);
  };

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="support-section">
      <div className="container">
        <h1>Transforming the world's leading companies</h1>
        <div className="slider">
          <button className="prev" onClick={prevSlide}>‹</button>
          <div className="slider-wrapper">
            <div
              className="slider-images"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`ClientsList ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <button className="next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </section>
  );
};

export default ClientsList;
