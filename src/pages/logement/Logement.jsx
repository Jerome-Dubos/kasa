import React, {  useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Logement.scss'
import Collapse from '../../components/Collapse/Collapse'
import Logements from '../../datas/Logements.json'
import Carousel from '../../components/Carrousel/Carrousel'
import Rating from '../../components/Rating/Rating'


const Logement = () => {
  const { id } = useParams();
  const logement = Logements.find(l => l.id === id);

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <main>
    <div className='carousel'>
      <Carousel pictures={logement.pictures} />
    </div>
    <section className='description'>
      <div>
        <h2 className='title'>{logement.title}</h2>
        <p className='location'>{logement.location}</p>
      </div>
      <div className='host'>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="Hôte" />
        </div>
      </section>
      <section className='description'>
        <div className='tags'>
          {logement.tags.map((tag, index) => (
        <div className='tag' key={index}>{tag}</div>
        ))}
        </div>
        <Rating rating={logement.rating} />
       </section>
       <div className='collapsesLog'>
        <Collapse title="Description" content={logement.description} />
        <Collapse className='equipment' title="Équipements" content={logement.equipments} />
      </div>
    </main>
  );
};

export default Logement