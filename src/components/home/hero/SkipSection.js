'use client'
import React from 'react'
import Image from 'next/image'

const skipSection = () => {
    window.scroll(0, window.innerHeight);
};
const SkipSection = () => {
    return (
        <div onClick={skipSection} className='cursor-pointer absolute z-[2] bottom-[3%] lg:bottom-[2.5vw] left-[50%] transform translate-x-[-50%] w-[20px] h-[38px] sm:w-[30px] sm:h-[48px] lg:h-[2.5vw] lg:w-[1.53645833333vw]'>
            <Image fill src='/images/home/hero/scroll.gif' alt='skipection' />
        </div>
    )
}

export default SkipSection
