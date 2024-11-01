import React from 'react'
import { useState } from 'react'
import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";



function Collapse({title, content }) {
    
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapse = () => {setCollapsed(!collapsed)}

    return (
        <div className={`collapse ${collapsed && 'collapsed'}`}>
            <div 
                className='collapseTitle' 
                onClick={toggleCollapse}
                role="button"
                aria-expanded={!collapsed}
                aria-controls="collapseContent"
            >{title}
                <span className='collapseIcon'>
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
            </div>
            <div 
            className='collapseContent'
            id="collapseContent"
            >
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li> // Affichage des éléments de la liste
                        ))}
                    </ul>
                ) : (
                    <div>{content}</div> // Affichage du contenu normal
                )}
            </div>
            </div>
    )
}

export default Collapse