import React, { useState } from 'react';
import './Logement.scss'
import Collapse from '../../components/Collapse/Collapse'
import Logements from '../../datas/Logements.json'
import Carousel from '../../components/Carrousel/Carrousel'
import Rating from '../../components/Rating/Rating'


function Logement() {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main>
      <div className='carousel'><Carousel /></div>
      <section className='description'>
      <div>
      <h2 className='title'>{Logements[currentIndex].title}</h2>
      <p className='location'>{Logements[currentIndex].location}</p>
      </div>
      <div className='host'>
        <p>{Logements[currentIndex].host.name}</p>
        <img src={Logements[currentIndex].host.picture} alt="Hôte" />
      </div>
      </section>
      <section className='description'>
      <div className='tags'>
        <div className='tag'>Tag 1</div>
        <div className='tag'>Tag 2</div>
        <div className='tag'>Tag 3</div>
        {/* {Logements.map(({tags, id}) => () => (
          <div className='tag' key={id}>{tags}</div>
          ))} */}
      </div>
      <Rating rating={Logements[currentIndex].rating} />
      </section>
      <div className='collapsesLog'>
        <Collapse title="Description" content={Logements[currentIndex].description} />
        <Collapse className='equipment' title="Équipements" content={Logements[currentIndex].equipments} />
      </div>
    </main>
  )
}


export default Logement