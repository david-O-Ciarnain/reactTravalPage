import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'


export default function TravalCard(props){
   
    
    return (
        <section className='cards-container'>
            <div className='cards-list'>
            <img src={`../images/${props.item.imageUrl}`} alt={props.item.alt} className="card-image"/>
           
            <div className='cards-info'>
                <div className='cards-header'>
                <FontAwesomeIcon icon = {faLocationDot}></FontAwesomeIcon>
                <p>{props.item.location}</p>
                <a className='gray' href={props.item.googleMapsUrl}> view on google Maps</a>
                </div>
                <div class="cards-text">
                <h2>{props.item.title}</h2>
                <h5>{props.item.startDate} - {props.item.endDate}</h5>
                <p>{props.item.description}</p>
                </div>
                </div>
            </div>
            <hr/>
        </section>
    )
}