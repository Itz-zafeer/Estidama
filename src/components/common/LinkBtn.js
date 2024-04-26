import Link from 'next/link'
import React from 'react'

const LinkBtn = ({ text, link }) => {
    return (
        <Link href={`${link ? link : "/"}`} className={` block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[1.36927083333vw] lg:py-[0.52083333333vw] py-[8px] px-[25px] sm:py-[10px] sm:px-[30px]`}>
            {text}
        </Link>
    )
}

export default LinkBtn
