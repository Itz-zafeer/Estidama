import LinkBtn from '@/components/common/LinkBtn'
import React from 'react'

const Content = () => {
    return (
        <div className='flex items-start justify-between text-white flex-wrap gap-[14px]'>
            <div className='lg:w-[39.1145833333vw]'>
                <span className='text24 f700 text-[#5EBD8E]'>اخر الأخبار</span>
                <h2 className='text-[#132D2B] mt16 text60 f700'>آخر الاخبار في استدامة</h2>
                <p className='text22 mt24 text-[#132D2B] text-opacity-[0.7]'> نحن نعمل على توفير حلول شاملة لإدارة النفايات، وتعزيز ثقافة إعادة التدوير والاستدامة. ونساهم في الحفاظ على البيئة وتقليل التلوث.</p>
            </div>
            <LinkBtn text='اكتشف المزيد' />
        </div>
    )
}

export default Content
