import React, { useEffect } from 'react'


const handelSubmit = (e) => {
    e.preventDefault()
    const inputEl = document.querySelector("#newsLetterForm .inputMain input")
    if (!inputEl.value) {
        inputEl.parentElement.parentElement.classList.add("active")

        setTimeout(() => {
            inputEl.parentElement.parentElement.classList.remove("active")
        }, 8000)
    }

}

const NewsLetter = () => {

    return (
        <form onClick={handelSubmit} id='newsLetterForm' className='mt12 flex lg:gap-x-[0.9375vw] gap-x-[14px] items-start'>
            <div className='inputMain flex flex-col lg:gap-y-[0.52083333333vw] gap-y-[8px]'>
                <div className='border100 bg-[#f4fff933] lg:py-[0.78125vw] lg:px-[1.38020833333vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]'>
                    <input type="email" className='w-full outline-none bg-transparent text18 placeholder:text18 placeholder:f700 text-white placeholder:text-white' placeholder='البريد الإلكتروني  ' />
                </div>
                <span className='error'>*Plz Enter Email*</span>
            </div>
            <button className={` block uppercase text20 bg-[#132D2B] transition-all duration-300 hover:bg-[#5EBD8E] border100 lg:px-[1.25vw] lg:py-[0.78125vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]`}>
                اشترك
            </button>
        </form>
    )
}

export default NewsLetter
