import Image from 'next/image'
import React from 'react'

const SuccessMsg = () => {
    return (
        <div className="formSuccess w-full h-full absolute flex-col top-0 left-0 flex items-center justify-center pointer-events-none opacity-0 ">
            <div className="flex items-center justify-center  flex-col">
                <span className="text35  text-green-600 f700  text-center capitalize">your form has been submitted</span>
                <div className='relative lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px]'>
                    <Image fill src='/images/icons/success.svg' alt='success' />
                </div>
            </div>
        </div>
    )
}

export default SuccessMsg
