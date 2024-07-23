import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () =>{
  return (
    <div className='border-t-4 border-black mt-4 footer_main_div'>
        <p className='text-xl md:text-2xl xl:text-3xl flex justify-center footer_ptag pt-2'>
          © 2024 FastEat. All rights reserved.
        </p>
        <ul className="text-base md:text-xl mx-auto justify-center gap-2 md:gap-3 lg:gap-6 pt-2 md:pt-4 flex footer_links">
            <li>About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
        </ul>
        <div className='flex flex-row text-xl md:text-3xl gap-3 md:gap-5 justify-center pt-2 pb-2 md:pt-4 footer_icons'>
            {/* email */}
            <a href="mailto:yugalramesh6832@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineMail />
            </a>
            {/* github */}
            <a href="https://github.com/Yugal2003" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            {/* linkdin */}
            <a href="https://www.linkedin.com/in/yugal-kumbhare-7b9825284/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
            {/* whatsapp */}
            <a href="https://wa.me/9316110894" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            {/* instragram */}
            <a href="https://www.instagram.com/yugal___6832/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
        </div>
    </div>
  )
}

export default Footer;