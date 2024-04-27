import React from 'react'
import BannerImg from '../../common/BannerImg'
import Content from './Content'

const Mission = () => {
    return (
        <section id='about'>
            <div className='Container1640 flex items-center flex-wrap lg:gap-x-[4.63541666667vw] sm:gap-y-[40px] gap-y-[30px] lg:pt-[13.5416666667vw] pt220'>
                <BannerImg src='/images/home/mission/banner.jpg' alt={'mission'} />
                <Content />
            </div>
        </section>
    )
}

export default Mission
