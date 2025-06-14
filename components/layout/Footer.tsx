import React from 'react';
import { FaLinkedinIn, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-purple-500 px-4 py-8 sm:px-6 md:px-12 md:py-12'>
            <div className='max-w-7xl mx-auto'>
                {/* Main footer content */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8'>
                    
                    {/* Social Media Links */}
                    <div className='flex gap-4 sm:gap-6 md:gap-8 order-1 md:order-1'>
                        <a 
                            href="https://www.linkedin.com" 
                            aria-label='LinkedIn' 
                            className='text-white text-xl sm:text-2xl hover:text-purple-200 transition-colors duration-200 p-2 hover:bg-purple-600 rounded-full'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a 
                            href="https://www.facebook.com" 
                            aria-label='Facebook' 
                            className='text-white text-xl sm:text-2xl hover:text-purple-200 transition-colors duration-200 p-2 hover:bg-purple-600 rounded-full'
                        >
                            <FaFacebookSquare />
                        </a>
                        <a 
                            href="https://www.twitter.com" 
                            aria-label='Twitter' 
                            className='text-white text-xl sm:text-2xl hover:text-purple-200 transition-colors duration-200 p-2 hover:bg-purple-600 rounded-full'
                        >
                            <FaTwitter />
                        </a>
                        <a 
                            href="https://www.instagram.com" 
                            aria-label='Instagram' 
                            className='text-white text-xl sm:text-2xl hover:text-purple-200 transition-colors duration-200 p-2 hover:bg-purple-600 rounded-full'
                        >
                            <PiInstagramLogoFill />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className='text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 order-2 md:order-2 text-center sm:text-left'>
                        <a 
                            href="/about" 
                            className='hover:text-purple-200 transition-colors duration-200 text-sm sm:text-base font-medium'
                        >
                            About Us
                        </a>
                        <a 
                            href="/privacy" 
                            className='hover:text-purple-200 transition-colors duration-200 text-sm sm:text-base font-medium'
                        >
                            Privacy Policy
                        </a>
                        <a 
                            href="/terms" 
                            className='hover:text-purple-200 transition-colors duration-200 text-sm sm:text-base font-medium'
                        >
                            Terms of Use
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className='mt-6 pt-4 border-t border-purple-400/30 text-center'>
                    <p className='text-white/80 text-xs sm:text-sm'>
                        ©{currentYear} Revve. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;