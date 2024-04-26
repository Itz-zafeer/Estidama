import React from 'react'
import Image from 'next/image'

const BannerImg = ({ src, alt }) => {
    return (
        <div className='relative lg:w-[41.6666666667vw] sm:w-[80%] w-full h-[300px] sm:h-[400px] lg:h-[37.5vw] border20 overflow-hidden'>
            <Image fill src={src} alt={alt} className='flipped object-cover border20' />
            <span className='atlwhFull bg-[#132D2B33]'></span>
        </div>
    )
}

export default BannerImg
