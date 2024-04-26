import React from 'react'
import Image from 'next/image'

const HeroImg = () => {
    return (
        <div className='atlwhFull z-[-1]'>
            <Image fill src='/images/home/hero/hero.jpg' alt='hero' className='object-cover' />
        </div>
    )
}

export default HeroImg
