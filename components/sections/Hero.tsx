'use client'

import { ImageAssets } from '@/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { motion } from 'framer-motion';
import { slides } from '@/lib/data';
import BaseButton from '../ui/BaseButton';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">

        {/* Previous Slide Fading Out */}
        <motion.div
          key={`prev-${prevSlide}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[prevSlide].background})` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Current Slide */}
        <motion.div
          key={`current-${currentSlide}`}
          className="absolute inset-0 bg-cover bg-center pt-12 lg:pt-0"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 z-10 hidden lg:block bg-black/60"
            style={{
              clipPath: 'url(#rounded-cutout)',
              WebkitClipPath: 'url(#rounded-cutout)',
            }}
          />
          <svg width="0" height="0">
            <defs>
              <clipPath id="rounded-cutout" clipPathUnits="objectBoundingBox">
              <path d="
  M0,0 L0,1 
  L0.35,1 
  L0.35,0.6
  Q0.35,0.25 0.4,0.25 
  L0.6,0.25
  Q0.65,0.25 0.65,0.6
  L0.65,1 
  L1,1 L1,0 Z
" />

              </clipPath>
            </defs>
          </svg>
          <div className='relative z-20 py-8 size-full flex flex-col items-center justify-center text-center text-white'>
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className='text-3xl lg:text-5xl mb-8 lg:mb-0'
            >
            Send. Shop. Spend
            </motion.h1>

            {/* mobile view */}
            <div className='flex flex-col lg:hidden w-full h-full  justify-around max-w-sm mx-auto space-y-6'>
             
                <motion.div
                variants={itemVariants}
                className='flex justify-between items-center'
              >
                <div className='text-left'>
                  <h3 className=' font-sans text-lg'>{slides[currentSlide].leftSection.country}</h3>
                  <GoArrowRight className='h-6 w-6 mt-1' />
                </div>
                
                <div className='text-right'>
                  <h3 className=' font-sans text-lg'>{slides[currentSlide].rightSection.country}</h3>
                  <div className='flex justify-end mt-1'>
                    <GoArrowLeft className='h-6 w-6' />
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className='bg-white/10 backdrop-blur-md rounded-2xl p-4 mx-4'
              >
                <div className='flex justify-between items-center mb-3'>
                  <img src={slides[currentSlide].middleSection.flag.src} alt="Flag" className='w-8 h-8' />
                  <h3 className='text-lg font-bold'>{slides[currentSlide].middleSection.amount}</h3>
                </div>
                
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <img src={slides[currentSlide].middleSection.transfer.image.src} alt="Flag" className='w-4 h-4' />
                    <div>
                      <p className='text-xs text-white/70'>{slides[currentSlide].middleSection.transfer.time}</p>
                      <p className='text-sm'>{slides[currentSlide].middleSection.transfer.description}</p>
                    </div>
                  </div>
                  <p className='font-semibold'>{slides[currentSlide].middleSection.transfer.amount}</p>
                </div>
              </motion.div>
            </div>
            {/* tab and desktop view */}
            <div className='hidden lg:grid grid-cols-3 gap-4 mt-8 grow w-full text-white/80'>
              
              {/* Left Section */}
              <motion.div
                variants={itemVariants}
                className='p-4 rounded-lg flex flex-col justify-end items-center text-start h-full'
              >
                <div className='h-fit max-w-[260px]'>
                  <h3 className=' font-sans text-2xl'>{slides[currentSlide].leftSection.country}</h3>
                  <GoArrowRight className='h-14 w-14' />
                  <p className='mt-12'>Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.</p>
                </div>
              </motion.div>

              {/* Middle Section */}
              <motion.div
                variants={itemVariants}
                className='w-full max-w-sm mx-auto py-8 gap-36 flex flex-col justify-end items-center text-start h-full'
              >
                <div className={` flex w-full justify-between items-center ${slides[currentSlide].middleSection.reverseOrder ? 'flex-row-reverse' : ''}`}>
                  <img src={slides[currentSlide].middleSection.flag.src} alt="Flag" className='w-12 h-12' />
                  <h3 className='text-xl text-white font-black font-paytone'>{slides[currentSlide].middleSection.amount}</h3>
                </div>

                <div className='flex justify-between items-center bg-white/12 gap-4 p-4 backdrop-blur-2xl w-full rounded-2xl'>
                <div className='flex gap-4 items-center'>
                  <img src={slides[currentSlide].middleSection.transfer.image.src} alt="Flag" className='w-8 h-8' />
                  <div className='flex flex-col'>
                    <p className='text-white/50'>{slides[currentSlide].middleSection.transfer.time}</p>
                    <p className='text-white font-semibold'>{slides[currentSlide].middleSection.transfer.description}</p>
                  </div>
                </div>
                  <p className='text-white font-semibold'>{slides[currentSlide].middleSection.transfer.amount}</p>
                </div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                variants={itemVariants}
                className='p-4 rounded-lg flex flex-col justify-end items-center text-right h-full'
              >
                <div className='h-fit max-w-[260px]'>
                  <h3 className=' text-2xl'>{slides[currentSlide].rightSection.country}</h3>
                  <div className='w-full flex justify-end'>
                    <GoArrowLeft className='h-14 w-14' />
                  </div>
                  <div>
                    <p className='mt-12 font-light'>Get Revve on your phone</p>
                    <BaseButton text="Download the app" variant="transparent" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
     
    </section>
  );
};

export default Hero;
