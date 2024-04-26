"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkBtn from '../common/LinkBtn'

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

function toggleSidebar() {
    const body = document.querySelector("body");
    const sideBar = document.querySelector(".sideBar");
    const menu = document.querySelector(".menu");
    body.classList.toggle("active");
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
}

const Header = ({ deepGreen }) => {
    return (
        <header className={`${deepGreen ? "deepGreen" : ""}  atlwhFull z-[10] h-[unset] lg:pt-[1.25vw] lg:px-[7.29166666667vw]   `}>
            <div className='flex justify-between items-center bg-[#132D2B] bg-opacity-[0.6] lg:border100 lg:py-[1.328125vw] lg:px-[2.91666666667vw] p-[30px] sm:p-[50px]'>
                <Link href='/' className='relative z-[3] block lg:w-[6.25vw] lg:h-[2.76041666667vw] sm:w-[160px] sm:h-[70px] w-[130px] h-[50px]'>
                    <Image src='/images/icons/logo.svg' fill alt='logo' />
                </Link>
                <nav className='text20 text-[#FFFFFF] flex lg:gap-x-[10.5729166667vw] items-center'>
                    <ul className='sideBar lg:h-[unset] lg:w-[unset] h-[100vh]  atlwhFull lg:static lg:p-[unset] px-[5%]  sm:pt-[40vw] pt-[50vw]  flex flex-col gap-y-[30px] sm:gap-y-[50px] lg:flex-row items-center lg:gap-x-[2.91666666667vw]'>
                        {
                            navLinks.map((navLink, i) => (
                                <li key={i} className={`${i === 0 ? "active" : ""} lg:pb-[unset] pb-[2vw] border-b lg:border-b-[0] w-full lg:w-[unset]`}>
                                    <Link href='/' className="block">
                                        {navLink.text}
                                    </Link>
                                </li>
                            ))
                        }
                        <li className='lg:hidden block mt-[30px] '>
                            <LinkBtn text='تواصل معنا' />
                        </li>
                    </ul>
                    <div className='relative z-[3] flex lg:gap-x-[1.25vw] sm:gap-x-[30px] gap-x-[20px] items-center'>
                        <Link href='/' className='block uppercase text24 font-[900] langHandel'>
                            EN
                        </Link>
                        <span className='  block lg:hidden w-[1px] sm:h-[30px] h-[20px]  bg-[#FFF] '>
                        </span>
                        <div
                            onClick={toggleSidebar}
                            className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
                        >
                            <span className="top-0"></span>
                            <span className="top-[30%]"></span>
                            <span className="top-[60%]"></span>
                        </div>
                        <div className='hidden lg:block  '>
                            <LinkBtn text='تواصل معنا' />
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
