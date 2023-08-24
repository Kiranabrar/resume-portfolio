import '../styles/Footerstyle.css'
import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {MdEmail} from 'react-icons/md';
const Footer = () => {
  return (
       <div className="footer">
      <div className="socialMedia">
        <FaInstagramSquare />
        <FaLinkedin/>
        <FcGoogle/>
        <MdEmail/>
      </div>
      <p> &copyright; 14/12/2022 Kiran Abrar </p>
    </div>
  )
}

export default Footer