import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubHero = () => {
    return (
        <div className='flex justify-between items-center flex-wrap gap-y-[20px]'>
            <div className='lg:w-[41.25vw]'>
                <Link href='/news' className='flex items-center lg:items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]'>
                    <img src="/images/icons/chevron-r-g.svg" alt="chevron" className='flipped lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px]' />
                    <span className='text20 f700 text-[#5EBD8E]'>الصفحة السابقة</span>
                </Link>
                <h1 className='lg:text-[2.60416666667vw] lg:leading-[3.125vw] text60 f700 mt32'>
                    نحن معك في رحلتك نحو صفر نفايات (Zero Waste)
                </h1>

            </div>
            <Link href='/' className='relative block lg:w-[3.4375vw] lg:h-[3.4375vw] sm:w-[55px] sm:h-[55px] w-[45px] h-[45px]'>
                <Image fill src='/images/icons/share.svg' alt='share' className='flipped' />
            </Link>
        </div>
    )
}

export default SubHero
