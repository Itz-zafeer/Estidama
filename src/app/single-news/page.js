import Layout from '@/components/layout/Layout'
import SubHero from '@/components/single-news/SubHero'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <Layout deepGreen>
            <div className=' Container1640 pb220 lg:w-[70.8333333333vw] lg:pt-[17.2916666667vw] pt-[50vw] sm:pt-[40vw]'>
                <SubHero />
                <div className='mt32'>
                    <div className='relative block w-full sm:h-[500px] h-[400px] lg:h-[34.6875vw]'>
                        <Image fill src='/images/single-news/banner.jpg' alt='banner' className='object-cover border20' />
                    </div>
                    <span className='text20 block mt32 lg:mt-[2.08333333333vw]'>يناير 21, 2024</span>
                </div>
            </div>
        </Layout>
    )
}

export default page
