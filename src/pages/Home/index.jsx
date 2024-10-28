import LocationItem from '../../components/LocationItem'
import Logements from '../../datas/Logements.json'
import './index.scss'
fetch('../../datas/Logements.json')

function Home() {
  return (
    <main>
    <div className='banner'>
      <p>Chez vous, partout et ailleurs</p>
    </div>
    <div className='gallery'>
      {Logements.map(({id, title, cover}) => (
        <LocationItem key={id} title={title} cover={cover} />
      ))}
    </div>
      </main>
  )
}

export default Home