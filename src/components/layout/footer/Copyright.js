import Link from 'next/link'
import React from 'react'

const Copyright = () => {
    return (
        <div className='relative bg-[#3A8873] text-center lg:py-[0.9375vw] py-[18px]'>
            <span className='bg-[#132D2B] bg-opacity-[0.2] atlwhFull'></span>
            <span className='relative z-[2] text17 text-white Container1640 block'>© 2024 حقوق الطبع والنشر واسكو جميع الحقوق محفوظةتم تطويره بواسطة  <Link href='https://brackets-tech.com/' target='_blank'>Brackets Technology</Link> </span>
        </div>
    )
}

export default Copyright
