import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Load from '../../components/Loading/Loading'
import './about.scss'

function About() {
  const  [aboutData, setAboutData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('/datas/Aboutlist.json')
    .then((response) => response.json())
    .then(data => {
      setAboutData(data)
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
  if (!aboutData) {
    return <Navigate to="/Error" />
  } else {

  return (
    <main>
      <div className="banner about"></div>
      <div className="collapses">
        {aboutData.map(({ title, content }) => (
          <Collapse key={title} title={title} content={content} />
        ))}
      </div>
    </main>
  )
}
}

export default About
