import { ImageAssets } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 md:gap-6 min-h-screen relative w-full overflow-hidden px-4 py-8'>
   
      <div className='relative z-20'>
        <Image 
          src={ImageAssets.HeroImage1} 
          alt='Send money to loved ones' 
          className='w-[70vw]  md:w-[30vw] max-w- aspect-square object-cover rounded-3xl md:rounded-4xl relative' 
        />
        <div className='absolute inset-0 rounded-3xl md:rounded-4xl flex items-end p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent'>
          <p className='text-white text-sm md:text-base'>
            Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.
          </p>
        </div>
      </div>
      <h2 className='text-2xl font-black max-w-xs sm:max-w-md text-center tracking-tighter leading-tight px-4 relative z-20'>
        Send and Receive Money
      </h2>


      <div className='block absolute inset-0 pointer-events-none z-10'>
       
        <Image 
          src={ImageAssets.Send} 
          alt='Send money' 
          className='absolute w-20 sm:w-24 md:w-32 top-16 sm:top-20 -left-8 sm:-left-16 md:-left-20 aspect-square object-cover rounded-2xl md:rounded-4xl' 
        />
        
        <Image 
          src={ImageAssets.Eating} 
          alt='Family dining' 
          className='absolute w-20 sm:w-24 md:w-32 top-16 sm:top-20 right-4 sm:right-8 md:right-12 aspect-square object-cover rounded-2xl md:rounded-4xl' 
        />
        
        <Image 
          src={ImageAssets.Shopping} 
          alt='Shopping' 
          className='absolute w-28 sm:w-36 md:w-48 bottom-16 sm:bottom-20 -left-8 sm:-left-16 md:-left-20 aspect-square object-cover rounded-2xl md:rounded-4xl' 
        />
        
        <Image 
          src={ImageAssets.Send} 
          alt='Money transfer' 
          className='absolute w-24 sm:w-28 md:w-36 bottom-16 sm:bottom-20 -right-8 sm:-right-16 md:-right-20 aspect-square object-cover rounded-2xl md:rounded-4xl' 
        />
        
        <Image 
          src={ImageAssets.Currency} 
          alt='Currency exchange' 
          className='hidden md:block absolute w-32 top-1/5 left-1/12 aspect-square object-cover rounded-4xl opacity-70' 
        />
        
        <Image 
          src={ImageAssets.PaperPlane} 
          alt='Fast transfer' 
          className='hidden md:block absolute w-32 top-1/3 right-1/12 aspect-square object-cover rounded-4xl opacity-70' 
        />
      </div>
    </section>
  )
}

export default Gallery