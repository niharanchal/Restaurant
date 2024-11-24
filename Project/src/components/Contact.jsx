import React from 'react'
import location from "../components/assets/location.png"

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1 className="heading">
            <span> Contact</span>Us
        </h1>
        <div className="row">
            <div className="map">
                <img src={location} alt="" />
            </div>
            <form action="">
                <h3>Get in touch</h3>
                <div className="inputbox">
                    <input type="text" placeholder='enter your name' />
                </div>
                <div className="inputbox">
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="inputbox">
                    <input type="number" placeholder='enter your number' />
                </div>
                <button type='submit' className='btn'>Contact now</button>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
