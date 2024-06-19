import React, { useState, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
  const headerImages = [
    "/images/header-image1.png", 
    "/images/header-image2.png", 
    "/images/header-image3.png", 
    "/images/header-image4.png",
  "/images/header-image5.png",
"/images/header-image6.png",
"/images/header-image7.png",
"/images/header-image8.png",
"/images/header-image9.png",
"/images/header-image.png",];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 

  useEffect(() => 
    { const interval = setInterval(() => {
  const startTime = performance.now();

  
      if (!isPaused) { 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    setIsPaused((prevState) => !prevState);
  };

 const endTime = performance.now();

  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Olá Bem Vindo</h2>
          <p>Confira as novidades que lhe Oferecemos todas as Semanas, temos varios produtos para si</p>
          <b>Voce vai adorar</b>
          <Link to="/products" className="Novidades-btn">
            <span><b>N</b><i>ovidades</i></span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src={headerImages[currentIndex]} alt="products" onClick={handleImageClick} />
          <div className="dots-container">
            {headerImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
