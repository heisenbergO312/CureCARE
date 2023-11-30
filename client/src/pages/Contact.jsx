import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="section-heading">CONTACT</div>
      <div className='contact-parent'>
        <div className='contact-form'>
          <div className='form-left'>
            <input className='form-input' placeholder="Your Name" />
            <input className='form-input' placeholder="Your Email" />
            <input className='form-input' placeholder="Subject" />
          </div>
          <div className='form-right'>
            <textarea className='form-textarea' placeholder="Your Message" />
            <button className='form-btn'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact