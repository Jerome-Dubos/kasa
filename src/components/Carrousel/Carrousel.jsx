import React, { useState } from 'react';
import Logements from '../../datas/Logements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Carrousel.scss';



const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button"><FontAwesomeIcon icon={faChevronLeft} /></button>
      <div>
      <img src={pictures[currentIndex]} alt="" />
        </div>
      <button onClick={goToNext} className="carousel-button"><FontAwesomeIcon icon={faChevronRight} /></button>
      
      <div className="carousel-counter">
        {`${currentIndex + 1} / ${pictures.length}`} {/* Compteur textuel */}
      </div>
    </div>
  );
};

export default Carousel;


//   return (
//     <div className="carousel">

//       {/* <div className="carousel-slide"> */}
//         <img
//           src={pictures[currentIndex]}
//           alt={`pictures ${currentIndex + 1}`}  
//         />
//         {/* <p>{currentIndex}/{pictures.length}</p>
//       </div> */}

//       <button onClick={goToNext} className="carousel-button carousel-button-next">
//       <FontAwesomeIcon icon={faChevronRight} />
//       </button>
//       {/* <div className="carousel-indicators">
//         {pictures.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`indicator ${currentIndex === index ? 'active' : ''}`}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default Carousel;
