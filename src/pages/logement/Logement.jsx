import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import './Logement.scss'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carrousel/Carrousel'
import Rating from '../../components/Rating/Rating'
import Load from '../../components/Loading/Loading'

const Logement = () => {
  const { id } = useParams()
  const  [logement, setLogement] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('/datas/Logements.json')
      .then((response) => response.json())
      .then(data => {
        const foundLogement = data.find((l) => l.id === id)
        setLogement(foundLogement)
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
  }else {

  return (
    <main>
      <div className="carousel">
        <Carousel pictures={logement.pictures} />
      </div>
      <section className="description">
        <div>
          <h2 className="title">{logement.title}</h2>
          <p className="location">{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="Hôte" />
        </div>
      </section>
      <section className="tags-rating">
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <Rating rating={logement.rating} />
      </section>
      <div className="collapsesLog">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </main>
  )
  }
}

export default Logement
