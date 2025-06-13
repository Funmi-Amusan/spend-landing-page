import React from 'react'
import Image from 'next/image'
import { ImageAssets } from '@/assets'

const ShopOnline = () => {
  return (
     <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 grow w-full min-h-screen'>
   <div className='flex flex-col justify-end h-full items-center p-8'>
     <h2 className='text-2xl font-black'>Shop Online</h2>
     <p>Experience the world at your fingertips with our seamless online shopping platform. 
<br />
From the latest fashion trends to must-have gadgets, shop the world&apos;s best brands and products from the comfort of your own home.</p> 
<p>Get Revve on your phone</p>
<button>Download the App</button>
 </div>
   <div className='flex flex-col justify-end h-full items-center '>
       <Image src={ImageAssets.ShoppingPhone} alt={'Shopping Mobile Mockup'} className='' />

   </div>
   <div className='flex flex-col justify-end h-full items-center'>
     <Image src={ImageAssets.ShoppingImage1} alt={'Shopping Image 1'} />
     <Image src={ImageAssets.ShoppingImage1} alt={'Shopping Image 1'} />
     <Image src={ImageAssets.ShoppingImage1} alt={'Shopping Image 1'} />
     <Image src={ImageAssets.ShoppingImage1} alt={'Shopping Image 1'} />

   </div>
       </section>
  )
}

export default ShopOnline