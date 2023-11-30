import React from 'react'
import { Link } from 'react-router-dom'
import { LINKEDIN, TWITTER, GITHUB, INSTAGRAM, COMPANY_NAME_1, COMPANY_NAME_2, COPYRIGHT } from '../../assets/utils'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <div className="footer-logo">
                    <div className="footer-logo-img"><i className="fa-solid fa-user-doctor" /></div>
                    <div className="footer-logo-name">{COMPANY_NAME_1}<p>{COMPANY_NAME_2}</p></div>
                </div>
                <div className="footer-copyright">{COPYRIGHT}</div>
                <div className="footer-socials">
                    <a href={LINKEDIN} target={'blank'} className='linkedin'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href={TWITTER} target={'blank'} className='twitter'>
                        <i className="fa-brands fa-square-twitter"></i>

                    </a>
                    <a href={GITHUB} target={'blank'} className='github'>
                        <i className="fa-brands fa-square-github"></i>

                    </a>
                    <a href={INSTAGRAM} target={'blank'} className='instagram'>
                        <i className="fa-brands fa-square-instagram"></i>

                    </a>

                </div>

            </div>
            <div className="footer-right">
                <div className="quick-links">
                    <h1>Quick Links</h1>
                    <Link to={'/'} className='footer-quicklink'>Home</Link>
                    <Link to={'/doctors'}  className='footer-quicklink'>Doctors</Link>
                    <Link to={'/services'} className='footer-quicklink'>Services</Link>
                    <Link to={'/about'} className='footer-quicklink'>About us</Link>
                </div>
                <div className="quick-links">
                    <h1>Support</h1>
                    <Link to={'/register'} className='footer-quicklink'>Register</Link>
                    <Link to={'/contact'} className='footer-quicklink'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer