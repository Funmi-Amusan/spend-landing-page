import React from 'react'
import { FaLinkedinIn, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className='flex justify-between bg-purple-500 p-12 pb-4'>
        <div className='flex gap-8'>
            <a href="https://www.linkedin.com" aria-label='LinkedIn' className='text-white text-[20px]'><FaLinkedinIn /></a >
            <a href="https://www.facebook.com" aria-label='Facebook' className='text-white text-[20px]'><FaFacebookSquare /></a >
            <a href="https://www.twitter.com" aria-label='Twitter' className='text-white text-[20px]'><FaTwitter /></a >
            <a href="https://www.instagram.com" aria-label='Instagram' className='text-white text-[20px]'><PiInstagramLogoFill /></a >
        </div>
        <div className='text-white flex gap-8'>
           <a href="">About Us</a>
           <a href="">Privacy Policy</a>
           <a href="">Terms of use</a>
           <p >©{currentYear} Revve. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer