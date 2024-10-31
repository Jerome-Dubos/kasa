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
            <div className='collapseTitle' onClick={toggleCollapse}>{title}<span className='collapseIcon'><FontAwesomeIcon icon={faChevronUp} /></span></div>
            <div className='collapseContent'>{content}</div>
            </div>
    )
}

export default Collapse