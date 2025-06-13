import { ImageAssets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Hero = () => {
  const heroBackground = './brown-hero-image.png';

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
       <div
  className="absolute inset-0 z-10 bg-black/70"
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
  L0.35,0.45
  Q0.35,0.4 0.4,0.4 
  L0.6,0.4
  Q0.65,0.4 0.65,0.45
  L0.65,1 
  L1,1 L1,0 Z
" />
    </clipPath>
  </defs>
</svg>
<div className='relative z-20 py-8 size-full flex flex-col items-center justify-center text-center'>
  <h1 className='text-white text-5xl font-bold'>Send. Shop. Spend</h1>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 grow w-full text-white/80'>
    <div className=' p-4 rounded-lg shadow-md flex flex-col justify-end items-center text-start h-full'>
    <div className='h-fit max-w-[260px] '>
      <h2 className='font-semibold text-2xl'>Canada</h2>
      <GoArrowRight  className='h-14 w-14' />
      <p className='mt-12'>Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.</p>
    </div>

    </div>
    <div className=' w-full py-8 gap-16 flex flex-col justify-end items-center text-start h-full'>
     <div className=' flex w-full px-16 justify-between items-center'>
      <Image src={ImageAssets.CanadaFlag} alt={'Canada Flag'} className='w-12 h-12' />
      <h3 className='text-xl text-white font-bold'>+C$750</h3>
     </div>

     <div className='flex justify-between items-center gap-4 p-4 backdrop-blur-md bg-white/10 rounded-2xl '>
      <img src={ImageAssets.CanadaFlag.src} alt={'Canada Flag'} className='w-6 h-6'/>
      <div className='flex flex-col'>
        <p className='text-white/50'>Yesterday, 1:28 AM</p>
        <p className='text-white'>Transfer to Lil Sis</p>
      </div>
      <p className='text-white'>-₦862,912.94</p>
     </div>
    </div>
    <div className=' p-4 rounded-lg shadow-md flex flex-col justify-end items-center text-right h-full'>
    <div className='h-fit max-w-[260px]'>
      <h2 className='font-semibold text-5xl'>Canada</h2>
      <GoArrowLeft  className='h-14 w-14'  />
      <p className=' mt-12'>Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.</p>
    </div>

    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
