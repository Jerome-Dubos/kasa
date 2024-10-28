import { redirect } from 'react-router-dom'
import './index.scss'
import Logement from '../../pages/logement/index'


function LocationItem ({id, title, cover}) {
    return (
        //Ajouter redirection lors du click sur l'item
        <div className='item' onClick={() => redirect("../../pages/logement/index.jsx")}>
            <img src={cover} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default LocationItem