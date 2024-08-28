import React from 'react'
import { FaCopyright, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyRights'>
        <span> <FaCopyright /></span>
        2024, All Copyrights Reserved
      </div>
      <div className='contactUs'>
        <a href='https://www.linkedin.com/in/rawan-mohamed-969a3a220/'><span> <FaLinkedin /></span></a>
        <a href='mailto: nrawana12345@gmail.com'>  <span> <SiGmail /></span></a>
      </div>
    </div>
  )
}

export default Footer
