import React from 'react'

const Overlays = () => {
    return (
        <div className='atlwhFull'>
            <span className='atlwhFull bg-[#132D2B] bg-opacity-[0.2]'></span>
            <span className='atlwhFull heroOverlay1 lg:h-[11.3020833333vw] h-[25%]'></span>
            <span className='atlwhFull bottom-0 top-[unset] heroOverlay2 lg:h-[23.28125vw] h-[45%]'></span>
            <img src="/images/home/hero/hero-pattern.png" alt="pattern"
                className='absolute heroPatternFixer flipped w-full sm:w-[64%] lg:w-[29.5833333333vw] lg:h-[29.5833333333vw] bottom-[-4%] lg:bottom-[-1.71875vw]  '
            />
        </div>
    )
}

export default Overlays
