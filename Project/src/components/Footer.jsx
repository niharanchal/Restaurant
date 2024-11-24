import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
        <div className="share">
            <div className="circle"><a href="#"><FaFacebookF /></a></div>
            <div className="circle"><a href="#"><FaXTwitter /></a></div>
            <div className="circle"><a href="#"><FaInstagram /></a></div>
            <div className="circle"><a href="#"><FaLinkedin /></a></div>
            <div className="circle"><a href="#"><FaPinterest /></a></div>
        </div>
        <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Product</a>
            <a href="#">Review</a>
            <a href="#">Contact</a>
        </div>
        <div className="credit">
            Created By-<span>Nihar Anchal</span>|@2024 Bhubaneswar India,All rights reserved
        </div>
    </section>
  )
}

export default Footer
