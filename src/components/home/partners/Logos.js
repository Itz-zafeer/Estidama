import React from 'react'
import Image from 'next/image'

const Logos = () => {
    return (
        <div className='flex flex-wrap gap-y-[20px] gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[6.04166666667vw] items-center lg:mt-[2.91666666667vw] sm:mt-[30px] mt-[20px]'>
            <div className='relative lg:w-[5.46875vw] lg:h-[5.46875vw] w-[24%] h-[70px]'>
                <Image fill src='/images/home/partners/1.svg' alt='partners' />
            </div>
            <div className='relative lg:w-[14.0625vw] lg:h-[5vw] sm:w-[41%] w-[65%] sm:h-[107px] h-[86px]'>
                <Image fill src='/images/home/partners/2.png' alt='partners' />
            </div>
            <div className='relative lg:w-[5.46875vw] lg:h-[5.46875vw] w-[24%] h-[70px]'>
                <Image fill src='/images/home/partners/1.svg' alt='partners' />
            </div>
            <div className='relative lg:w-[7.5vw] lg:h-[5.46875vw] w-[28%] h-[70px]'>
                <Image fill src='/images/home/partners/3.svg' alt='partners' />
            </div>
        </div>
    )
}

export default Logos
