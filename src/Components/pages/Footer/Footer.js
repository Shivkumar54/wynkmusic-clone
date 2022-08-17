import React from 'react'
import "./Footer.css"
import {FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
      <div className='container foot'>
          <div className="footreContent">
          <h6>
          ABOUT US | ADVERTISE WITH US | PRIVACY POLICY | TERMS OF USE | CONTACT US| FEEDBACK | HELLOTUNES
          </h6>
        </div>
          <div className="icons">
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaInstagramSquare size={25} />
          <FaYoutube size={25} />
          </div>
    </div>
  )
}

export default Footer