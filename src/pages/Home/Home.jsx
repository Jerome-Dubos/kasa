import React from 'react';
import LocationItem from '../../components/LocationItem/LocationItem';
import Logements from '../../datas/Logements.json';
import './Home.scss';

const Home = () => {
  return (
    <main>
      <div className='banner'>
      <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className='gallery'>
        {Logements.map((logement) => (
          <LocationItem
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
