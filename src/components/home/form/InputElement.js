import React from 'react'

const InputElement = ({ input }) => {
    return (
        <div className='inputMain flex flex-col lg:gap-y-[0.52083333333vw] gap-y-[8px]'>
            <div className='border-[#5EBD8E] border-b-[1.5px] lg:border-b-[0.078125vw]  lg:py-[0.78125vw] lg:px-[1.38020833333vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]'>
                <input type={`${input.type ? input.type : "text"}`} className='w-full outline-none bg-transparent text22 placeholder:text22 placeholder:font-[500] text-[#132D2B] text-opacity-[0.5] placeholder:text-opacity-[0.5] placeholder:text-[#132D2B]' placeholder={input.placeholder} />
            </div>
            <span className='error'>*Plz Enter {input.errormsg}*</span>
        </div>
    )
}

export default InputElement
