import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Carrousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible.</p>;
  }

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button 
            onClick={goToPrevious} 
            className="carousel-button" 
            aria-label="Précédent" 
            tabIndex={0} 
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <button 
            onClick={goToNext} 
            className="carousel-button" 
            aria-label="Suivant" 
            tabIndex={0} 
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      
      <div className="carousel-image-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {pictures.map((picture, index) => (
          <img 
            key={index}
            src={picture} 
            alt={`${index + 1} sur ${pictures.length}`} 
            className="carousel-image" 
          />
        ))}
      </div>
      
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {`${currentIndex + 1} / ${pictures.length}`}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
