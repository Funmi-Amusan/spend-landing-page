"use client";

import { faqs } from '@/lib/data'
import React, { useState } from 'react'
import Accordion from '../ui/Accordion'

const FAQs = () => {

    const [openItemId, setOpenItemId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
      setOpenItemId(prevId => (prevId === id ? null : id));
    };

  return (
    <section className='bg-purple-500 min-h-screen w-full grid grid-cols-3 py-12'>
<div className='col-span-1 text-white flex flex-col justify-center gap-8 max-w-[340px] p-8'>
    <h2 className='text-2xl font-black'>FAQs</h2>
    <p>Here are some basic questions and answers to help you get started</p>
    <div className='flex flex-col gap-2 text-start'>
        <p>Get Revve on your phone</p>
        <button className='bg-white text-black px-6 font-medium text-sm py-2 rounded-lg'>Download the app</button>
    </div>
</div>
<div className=' col-span-2 '>
{
        faqs.map((faq) => (
          <Accordion
            key={faq.id} 
            question={faq.question}
            answer={faq.answer}
            id={faq.id}
            isOpen={openItemId === faq.id} 
            onToggle={handleToggle} 
          />
        ))
      }
</div>
    </section>
  )
}

export default FAQs