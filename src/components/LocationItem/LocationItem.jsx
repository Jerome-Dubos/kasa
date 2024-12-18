import { Link } from 'react-router-dom'
import React from 'react'
import './LocationItem.scss'

const LocationItem = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`}>
      <div className="item">
        <img src={cover} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default LocationItem
