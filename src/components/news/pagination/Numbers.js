import React from "react";

const Numbers = () => {
  return (
    <>
      {[1, 2, 3, 4, 10].map((value, i) => (
        <>
          <span
            key={i}
            className={`${
              i === 0 ? "active" : ""
            } numbers cursor-pointer text29 lg:text-[1.45833333333vw] text-[#132D2B] text-opacity-[0.3]`}
          >
            {value}
          </span>
          {value === 4 && (
            <div className="cursor-pointer flex items-center lg:gap-x-[0.20833333333vw] gap-x-[4px]">
              <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
              <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
              <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Numbers;
