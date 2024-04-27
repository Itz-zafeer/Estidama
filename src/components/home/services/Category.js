import React from 'react'

const Category = ({ handelActive, handelActiveCategory, categoryItem, i }) => {
    return (
        <button onClick={() => { handelActive(i, categoryItem.img) }} className={`${handelActiveCategory === i ? "active" : ""} service-category  border-b-[3px] lg:border-b-[0.15625vw] lg:py-[2.91666666667vw] sm:py-[30px] py-[22px] border-[#5EBD8E] border-opacity-[0.3] bg-[#5EBD8E0D] bg-opacity-[0.3] rounded-bl-[0] rounded-br-[0] border20 text24 text-[#132D2B] text-opacity-[0.3]`}>
            <span className='lg:w-[31.875vw] mx-[auto] w-[82%] sm:w-[88%] block text-start'>
                {categoryItem.category}
            </span>

        </button>
    )
}

export default Category
