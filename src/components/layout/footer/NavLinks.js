import React from 'react'
import NavLink from './NavLink'
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
const NavLinks = () => {
    return (
        <ul className='listHover text20 text-[#FFFFFF] flex items-center lg:gap-x-[2.91666666667vw] gap-x-[50px] flex-wrap gap-y-[10px]'>
            {
                navLinks.map((navLink, i) => (
                    <NavLink
                        navLink={navLink}
                        key={i}

                    />
                ))
            }

        </ul>
    )
}

export default NavLinks
