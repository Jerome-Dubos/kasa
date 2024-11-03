import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import "./Rating.scss"

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="full"/>
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className='full'/>}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          className='empty'
          key={index + fullStars}
          icon={faStar}
        />
      ))}
    </div>
  )
}

export default Rating
