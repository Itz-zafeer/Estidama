import React from 'react'

const Content = () => {
    return (
        <div className='lg:w-[37.3958333333vw]'>
            <div>
                <h3 className='text35'>
                    مهمتنا هي جمع المواد القابلة للتدوير من مصادر مختلفة مثل القطاعات التجارية والسكنية، والصناعية بمحافظة <span className='text-[#5EBD8E]'>جدة</span>، وتصنيفها، وفرزها بطريقة فعالة لإعادة التدوير
                </h3>
                <p className='text22 text-[#132D2B] text-opacity-[0.7] mt12'>
                    نحن نعمل على توفير حلول شاملة لإدارة النفايات، وتعزيز ثقافة إعادة التدوير والاستدامة. ونساهم في الحفاظ على البيئة وتقليل التلوث من خلال جمع، وفرز المواد القابلة للتدوير، ثم إعادة تدويرها من خلال المصانع المحلية.
                </p>
            </div>
            <div className='flex items-center lg:gap-x-[4.42708333333vw] sm:gap-x-[55px] gap-[10px] flex-wrap lg:mt-[2.08333333333vw] sm:mt-[30px] mt-[20px]'>
                <div>
                    <div className='flex items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]'>
                        <span className='text100 text-[#5EBD8E]'>٤٠</span>
                        <span className='text20 text-[#000000] text-opacity-[0.7] lg:mb-[0.3125vw] mb-[6px]'>شاحنة </span>
                    </div>
                    <p className='text17 text-[#000000] mt12 lg:mt-[0.52083333333vw]'>
                        تقوم بجمع ونقل المواد القابلة لإعادة التدوير
                    </p>
                </div>
                <div>
                    <div className='flex items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]'>
                        <span className='text100 text-[#5EBD8E]'>١٩ </span>
                        <span className='text20 text-[#000000] text-opacity-[0.7] lg:mb-[0.3125vw] mb-[6px]'>مركز </span>
                    </div>
                    <p className='text17 text-[#000000] mt12 lg:mt-[0.52083333333vw]'>
                        جميع مراكزنا مجهزة لاستلام المواد
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content
