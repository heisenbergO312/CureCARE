import React from 'react'
import { services } from "../assets/data/services"
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className="services-parent">
      <div className="section-heading">SERVICES</div>
      <div className='services-container'>
        {
          services.map((item) => (
            <ServiceCard key={item.name} service={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Services