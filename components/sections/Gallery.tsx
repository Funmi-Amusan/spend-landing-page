import { ImageAssets } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 min-h-screen relative w-full overflow-clip'>
      <div className='relative'>
        <Image src={ImageAssets.HeroImage1} alt={''} className='w-[30vw] aspect-square object-cover rounded-4xl z-10 relative' />
        <div className='absolute inset-0 rounded-4xl z-20 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent'>
          <p className='text-white'>Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.</p>
        </div>
      </div>
      <h2 className='text-2xl font-black max-w-md text-center tracking-tighter leading-12'>Send and Receive Money</h2>

      <Image src={ImageAssets.Send} alt={''} className='absolute w-32 top-20 -left-20 aspect-square object-cover rounded-4xl z-10 ' />
      <Image src={ImageAssets.Eating} alt={''} className='absolute w-32 top-20 right-12 aspect-square object-cover rounded-4xl z-10 ' />
      <Image src={ImageAssets.Shopping} alt={''} className='absolute w-48 bottom-20 -left-20 aspect-square object-cover rounded-4xl z-10 ' />
      <Image src={ImageAssets.Send} alt={''} className='absolute w-36 bottom-20 -right-20 aspect-square object-cover rounded-4xl z-10 ' />
      <Image src={ImageAssets.Currency} alt={''} className='absolute w-32 top-1/5 left-1/6 aspect-square object-cover rounded-4xl z-10 ' />
      <Image src={ImageAssets.PaperPlane} alt={''} className='absolute w-32 top-1/3 right-1/6 aspect-square object-cover rounded-4xl z-10 ' />
  

    </section>
  )
}

export default Gallery