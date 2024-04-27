import React from 'react'
import SocialIcon from './SocialIcon'

const socialIcons = [
    {
        img: "/images/icons/social-icons/fb.svg",
        alt: "fb",
        link: "https://www.facebook.com/"
    },
    {
        img: "/images/icons/social-icons/twitter.svg",
        alt: "twitter",
        link: "https://twitter.com/?lang=en"
    },
    {
        img: "/images/icons/social-icons/linkedin.svg",
        alt: "linkedin",
        link: "https://www.linkedin.com/"
    },
    {
        img: "/images/icons/social-icons/instagram.svg",
        alt: "instagram",
        link: "https://www.instagram.com/"
    },
]
const SocialIcons = () => {
    return (
        <ul className='listHover flex lg:gap-x-[1.25vw] gap-x-[20px] items-center mt32'>
            {
                socialIcons.map((socialIcon, i) => (
                    <SocialIcon
                        socialIcon={socialIcon}
                        key={i}

                    />
                ))
            }

        </ul>
    )
}

export default SocialIcons
