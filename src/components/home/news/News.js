import React from 'react'
import NewsCard from '@/components/common/NewsCard'
import Content from './Content'
import SmallCards from './SmallCards'

const News = () => {
    return (
        <section>
            <div className='Container1640 py220 '>
                <Content />
                <div className='mt56 flex flex-wrap sm:gap-y-[40px] gap-y-[30px] lg:gap-x-[2.08333333333vw]'>
                    <NewsCard
                        date='يناير 21, 2024'
                        heading='نحن معك في رحلتك نحو صفر نفايات (Zero Waste)'
                        text='تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. '
                        linkText='اقرا المزيد'
                        link='/news'
                        src='/images/home/news/bigcard.jpg'
                        bigCard
                    />
                    <SmallCards />
                </div>
            </div>
        </section>
    )
}

export default News
