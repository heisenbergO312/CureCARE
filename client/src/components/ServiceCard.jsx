import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = (props) => {
    return (
        <div className='service-card-parent' style={{ backgroundColor: props.service.bgColor }}>
            <h2>{props.service.name}</h2>
            <p>{props.service.desc}</p>
            <div className="icons">
                <Link className='arrow' to={'/booking'}><i className="fa-solid fa-arrow-right"></i></Link>
                <div className="service-id" style={{ backgroundColor: props.service.bgColor, color: props.service.textColor }}>{props.service.id}</div>
            </div>
        </div>

    )
}

export default ServiceCard