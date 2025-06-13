import React from 'react'
import Image from 'next/image'
import { ImageAssets } from '@/assets'

const Wallets = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 grow w-full min-h-screen'>
<div className='flex flex-col justify-end h-full items-center p-8'>
  <h2 className='text-2xl font-black'>Multi-currency 
  Wallets</h2>
  <p>Facilitate effortless management of multiple wallets, each dedicated to a specific currency, streamlining transactions and storage across various currencies. 
<br />
Enhance user experience with tailored wallets for different currencies, empowering efficient financial management and flexibility in global transactions</p>
</div>
<div className='flex flex-col justify-end h-full items-center relative'>
    <Image src={ImageAssets.MobileMockup} alt={'Mobile Mockup'} className='z-10 relative' />

  {/* cards */}
  <div className="absolute top-0 z-10 w-7/10 gap-4 flex flex-col">
    <Image src={ImageAssets.CanadaCard} alt={'Canada Card'} className='w-full h-full' />
    <Image src={ImageAssets.NigeriaCard} alt={'Nigeria Card'} className='w-full h-full' />
    <Image src={ImageAssets.USDCard} alt={'USD Card'} className='w-full h-full' />
    <Image src={ImageAssets.CFACard} alt={'CFA Card'} className='w-full h-full' />
  </div>
</div>
<div className='flex flex-col justify-end h-full items-center'>
  <Image src={ImageAssets.Girl} alt={'Girl'} />
</div>
    </section>
  )
}

export default Wallets