import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarth} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return (
        <div className='header'>
            <FontAwesomeIcon icon = {faEarth}></FontAwesomeIcon>
        <h1>Travel page</h1>
        
        </div>
    )
}