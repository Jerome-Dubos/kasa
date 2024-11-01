import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#FF6060" />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="#FF6060" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index + fullStars} icon={faStar} color="#E3E3E3" />
      ))}
    </div>
  );
};

export default Rating;
