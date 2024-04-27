import React from 'react'
import Overlays from './Overlays';
import Content from './Content';
import HeroImg from './HeroImg';
import SkipSection from './SkipSection';


const Hero = () => {
    return (
        <section id='hero' className='h-screen w-full relative flex justify-center items-end lg:pb-[12.2916666667vw] sm:pb-[30vw] pb-[40vw]'>
            <div className='atlwhFull overflow-hidden'>
                <Overlays />
                <HeroImg />
                <SkipSection />
            </div>
            <Content />
        </section>
    )
}

export default Hero
