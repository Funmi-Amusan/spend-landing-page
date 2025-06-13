import { ImageAssets } from '@/assets'
import React from 'react'
import Image from 'next/image';

const PayBills = () => {

    const backgroundImage = ImageAssets.PayBills.src;

  return (
    <section
    className="relative h-screen w-full bg-cover bg-center flex justify-between items-center p-8"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
<div className='text-white max-w-[340px] flex flex-col gap-8'>
    <h2 className='text-2xl font-black '>Pay Bills</h2>
    <p>Say goodbye to long queues and endless processes—our platform offers a seamless solution for paying bills instantly without any hiccups.</p>
    <div>
    <p>Get Revve on your phone</p>
    <button className='bg-white text-black px-6 font-medium text-sm py-2 rounded-lg'>Coming Soon</button>
    </div>
</div>
<div className='max-w-[340px] w-full'>
    <Image src={ImageAssets.Calendar} alt={'Calendar'} className='w-full aspect-square' />
</div>
   </section>
  )
}

export default PayBills