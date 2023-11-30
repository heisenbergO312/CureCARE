import React from 'react'
import { HISTORY, MISSION, VISION } from '../assets/utils'

const About = () => {
    return (
        <div className="about-parent">
            <div className="section-heading">ABOUT US</div>
            <div className='about-container'>
                <h1>Our History</h1>
                <p>{HISTORY}</p>
                <h1>Our Mission</h1>
                <p>{MISSION}</p>
                <h1>Our Vision</h1>
                <p>{VISION}</p>
            </div>
        </div>
    )
}

export default About