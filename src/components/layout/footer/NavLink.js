import Link from 'next/link'
import React from 'react'

const NavLink = ({ navLink }) => {
    return (
        <li>
            <Link href='/' className="block">
                {navLink.text}
            </Link>
        </li>
    )
}

export default NavLink
