import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './LocationItem.scss';
import Logements from '../../datas/Logements.json';

const LocationItem = ({ id, title, cover }) => {
  const [logement, setLogement] = useState([]);

  useEffect(() => {
    setLogement(Logements)
  }, [])

  return (
    <Link to={`/logement/${Logements.id}`}>
      <div className='item'>
        <img src={cover} alt={title} />
        <p>{title}</p>
      </div>
    </Link>)
  }


// function LocationItem({ id, title, cover }) {

//   return (
//     <Link to={`/logement`}>
//       <div className='item'>
//         <img src={cover} alt={title} />
//         <p>{title}</p>
//       </div>
//     </Link>
//   );
// }

export default LocationItem;