import React from 'react'

const Category = ({ handelActive, handelActiveCategory, categoryItem, i }) => {
    return (
        <button onClick={() => { handelActive(i, categoryItem.img) }} className={`${handelActiveCategory === i ? "active" : ""}  service-category   relative lg:py-[2.99479166667vw] sm:py-[30px] py-[22px] bg-[#5EBD8E0D] bg-opacity-[0.3]   border20 overflow-hidden text24 text-[#132D2B] text-opacity-[0.3]`}>
            <span className='lg:w-[31.875vw] mx-[auto] w-[82%] sm:w-[88%] block text-start'>
                {categoryItem.category}
            </span>
            <span className='border absolute bottom-[0] z-[1] leftRightFixer1 bg-[#5EBD8E] bg-opacity-[0.3] w-full h-[3px] lg:h-[0.15625vw] block'></span>
        </button>
    )
}

export default Category
