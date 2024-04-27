import React from 'react'
import InputElement from './InputElement'

const InputElements = ({ inputsData }) => {
    return (
        <div className='flex flex-col lg:gap-y-[1.66666666667vw] gap-y-[20px]'>
            {inputsData.map((input, i) => (
                <InputElement input={input} key={i} />
            ))}
        </div>
    )
}

export default InputElements
