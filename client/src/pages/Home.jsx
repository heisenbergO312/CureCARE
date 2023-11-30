import React from 'react'

import {Link} from "react-router-dom"
import { DOCTORS, HOME_DESC, HOME_HEAD, SATISFACTION, YEARS } from '../assets/utils'
import homeIMG from "../assets/images/about.webp"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>{HOME_HEAD}</h1>
        <p>{HOME_DESC}</p>
        <Link className='home-btn' to={'/doctors'}> Find a Doctor</Link>
        <div className="stats">
          <div className="stat">
            <h2>{YEARS}</h2>
            <p>Years </p>
          </div>
          <div className="stat">
            <h2>{DOCTORS}</h2>
            <p>Doctors</p>
          </div>
          <div className="stat">
            <h2>{SATISFACTION}</h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="home-right">
        <img className='home-img' src={homeIMG} alt="" />
      </div>
    </div>
  )
}

export default Home