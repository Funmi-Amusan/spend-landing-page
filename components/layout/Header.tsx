import { ImageAssets } from '@/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50 bg-transparent flex items-center justify-between px-8'>
        <Image src={ImageAssets.Logo} alt="logo" width={120} height={40} />
        <Image src={ImageAssets.Control} alt="control" width={40} height={40} />
    </header>
  )
}

export default Header