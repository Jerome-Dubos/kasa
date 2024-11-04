import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import LocationItem from '../../components/LocationItem/LocationItem'
import Logements from '../../datas/Logements.json'
import './Home.scss'
import Load from '../../components/Loading/Loading'

const Home = () => {
  const  [logement, setLogement] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('/datas/Logements.json')
    .then((response) => response.json())
    .then(data => {
        setLogement(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données:", error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Load />
  }
  if (!logement) {
    return <Navigate to="/Error" />
  } else {

    return (
      <main>
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="gallery">
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
  )
}
}

export default Home
