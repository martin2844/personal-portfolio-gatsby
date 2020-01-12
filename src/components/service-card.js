import React from 'react';
import './service-card.styles.scss';


const ServiceCard = (props) => {
    return (
        <div className='service-container'>
        <div className='service-icon'><i className={props.icon}></i></div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        </div>
    )
}

export default ServiceCard