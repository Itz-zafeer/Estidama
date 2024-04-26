import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navLinks = [
    {
        link: '',
        text: "الصفحة الرئيسية",
    },
    {
        link: '',
        text: "من نحن",
    },
    {
        link: '',
        text: "خدماتنا",
    },
    {
        link: '',
        text: "شركاؤنا",
    },
    {
        link: '',
        text: "اخر الاخبار",
    },
]
const Footer = () => {
    return (
        <footer>
            <div className='bg-[#3A8873]'>
                <div className='Container1640 flex items-center lg:gap-x-[6.35416666667vw] flex-wrap gap-y-[20px]'>
                    <div>
                        <Link href='/' className='relative block lg:w-[8.85416666667vw] lg:h-[3.90625vw] sm:w-[160px] sm:h-[70px] w-[130px] h-[50px]'>
                            <Image src='/images/icons/logo.svg' fill alt='logo' />
                        </Link>
                        <p className='text18 mt24 lg:w-[19.7916666667vw] text-white'>
                            نرشد الجهات طوعيًا بتوفير تغليف قابل لإعادة الاستخدام مثل أكواب أكياس... وغيرها.

                        </p>
                    </div>
                    <ul className='text20 text-[#FFFFFF] flex items-center lg:gap-x-[2.91666666667vw]'>
                        {
                            navLinks.map((navLink, i) => (
                                <li key={i} className={`${i === 0 ? "active" : ""} lg:pb-[unset] pb-[2vw] border-b lg:border-b-[0] w-full lg:w-[unset]`}>
                                    <Link href='/' className="block">
                                        {navLink.text}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                    <div>
                        <h5 className='text20 f700 text-white'>
                            اتبع النشرة الإخبارية لدينا
                            <form className='mt12 flex lg:gap-x-[0.9375vw] items-start'>
                                <div className='flex flex-col lg:gap-y-[0.72916666666vw] gap-y-[14px]'>
                                    <div className='border100 bg-[#f4fff933] lg:py-[0.78125vw] lg:px-[1.38020833333vw]'>
                                        <input type="email" className='w-full outline-none bg-transparent text18 placeholder:text18 placeholder:f700 text-white placeholder:text-white' placeholder='البريد الإلكتروني  ' />
                                    </div>
                                    <span className='text18 text-[red]'>*Errror*</span>
                                </div>
                                <button className={` block uppercase text20 bg-[#132D2B] transition-all duration-300 hover:bg-[#5EBD8E] border100 lg:px-[1.25vw] lg:py-[0.78125vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]`}>
                                    اشترك
                                </button>
                            </form>
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
