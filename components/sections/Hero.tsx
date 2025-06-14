'use client'

import { ImageAssets } from '@/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { motion } from 'framer-motion';
import { slides } from '@/lib/data';

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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 z-10 hidden md:block bg-black/70"
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
              className='text-3xl md:text-5xl font-bold mb-8 md:mb-0'
            >
              {slides[currentSlide].title}
            </motion.h1>

            <div className='flex flex-col md:hidden w-full h-full  justify-around max-w-sm mx-auto space-y-6'>
             
                <motion.div
                variants={itemVariants}
                className='flex justify-between items-center'
              >
                <div className='text-left'>
                  <h2 className='font-semibold text-lg'>{slides[currentSlide].leftSection.country}</h2>
                  <GoArrowRight className='h-6 w-6 mt-1' />
                </div>
                
                <div className='text-right'>
                  <h2 className='font-semibold text-lg'>{slides[currentSlide].rightSection.country}</h2>
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
                  <Image src={ImageAssets.CanadaFlag} alt="Flag" className='w-8 h-8' />
                  <h3 className='text-lg font-bold'>{slides[currentSlide].middleSection.amount}</h3>
                </div>
                
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <img src={ImageAssets.CanadaFlag.src} alt="Flag" className='w-4 h-4' />
                    <div>
                      <p className='text-xs text-white/70'>{slides[currentSlide].middleSection.transfer.time}</p>
                      <p className='text-sm'>{slides[currentSlide].middleSection.transfer.recipient}</p>
                    </div>
                  </div>
                  <p className='font-semibold'>{slides[currentSlide].middleSection.transfer.amount}</p>
                </div>
              </motion.div>
            </div>

            <div className='hidden md:grid grid-cols-3 gap-4 mt-8 grow w-full text-white/80'>
              
              {/* Left Section */}
              <motion.div
                variants={itemVariants}
                className='p-4 rounded-lg flex flex-col justify-end items-center text-start h-full'
              >
                <div className='h-fit max-w-[260px]'>
                  <h2 className='font-semibold text-2xl'>{slides[currentSlide].leftSection.country}</h2>
                  <GoArrowRight className='h-14 w-14' />
                  <p className='mt-12'>{slides[currentSlide].leftSection.description}</p>
                </div>
              </motion.div>

              {/* Middle Section */}
              <motion.div
                variants={itemVariants}
                className='w-full py-8 gap-36 flex flex-col justify-end items-center text-start h-full'
              >
                <div className='flex w-full px-16 justify-between items-center'>
                  <Image src={ImageAssets.CanadaFlag} alt="Flag" className='w-12 h-12' />
                  <h3 className='text-xl text-white font-bold'>{slides[currentSlide].middleSection.amount}</h3>
                </div>

                <div className='flex justify-between items-center gap-4 p-4 backdrop-blur-md bg-white/10 rounded-2xl'>
                  <img src={ImageAssets.CanadaFlag.src} alt="Flag" className='w-6 h-6' />
                  <div className='flex flex-col'>
                    <p className='text-white/50'>{slides[currentSlide].middleSection.transfer.time}</p>
                    <p className='text-white'>{slides[currentSlide].middleSection.transfer.recipient}</p>
                  </div>
                  <p className='text-white'>{slides[currentSlide].middleSection.transfer.amount}</p>
                </div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                variants={itemVariants}
                className='p-4 rounded-lg flex flex-col justify-end items-center text-right h-full'
              >
                <div className='h-fit max-w-[260px]'>
                  <h2 className='font-semibold text-2xl'>{slides[currentSlide].rightSection.country}</h2>
                  <div className='w-full flex justify-end'>
                    <GoArrowLeft className='h-14 w-14' />
                  </div>
                  <p className='mt-12'>{slides[currentSlide].rightSection.description}</p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .clip-path-custom {
          clip-path: url(#rounded-cutout);
          -webkit-clip-path: url(#rounded-cutout);
        }
      `}</style>

      <svg width="0" height="0" className="hidden md:block">
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
    </section>
  );
};

export default Hero;
