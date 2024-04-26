'use client'
import React, { useState } from 'react'
import BannerImg from '@/components/common/BannerImg'
import Content from './Content'

const categories = [
    {
        category: "جمع، ونقل واستلام المواد القابلة لإعادة التدوير المفروزة من المصدر.",
        img: "/images/home/services/1.jpg",
    },
    {
        category: "توفير مواد قابلة لإعادة التدوير عالية الجودة تشمل كافة أنواع النفايات البلدية الصلبة ، ونفايات الالكترونيات، والمواد المصاحبة لها.",
        img: "/images/home/services/2.jpg",

    },
    {
        category: "إضافة صور عن مراكز الشركة ومركباتها في الأماكن المناسبة.",
        img: "/images/home/services/3.jpg",

    },
]

const Services = () => {
    const [categoryImg, setCategoryImg] = useState("/images/home/services/1.jpg")
    const [handelActiveCategory, sethandelActiveCategory] = useState(0)
    const handelActive = (i, categoryImg) => {
        sethandelActiveCategory(i)
        setCategoryImg(categoryImg)
    }

    return (

        <section>
            <div className='Container1640 py220 flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-[9.375vw] sm:gap-y-[40px] gap-y-[30px] flex-wrap'>
                <Content categories={categories}
                    handelActive={handelActive}
                    handelActiveCategory={handelActiveCategory} />
                <BannerImg src={categoryImg} alt={'services'} />

            </div>
        </section>
    )
}

export default Services
