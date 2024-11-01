import React, { useState, useEffect } from 'react';
import Logements from '../../datas/Logements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Carrousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Logements.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Logements.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide toutes les 5 secondes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button carousel-button-prev">
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="carousel-slide">
        <img
          src={Logements[currentIndex].pictures[0]}
          alt={Logements[currentIndex].title}
        />
        <p>{currentIndex}/{Logements[currentIndex].pictures.length}</p>
      </div>

      <button onClick={nextSlide} className="carousel-button carousel-button-next">
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
