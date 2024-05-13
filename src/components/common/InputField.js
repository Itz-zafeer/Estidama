import React from "react";

const InputField = ({
  error,
  widthHalf,
  type,
  placeholder,
  value,
  handleChange,
  id
}) => {
  return (
    <div className={`inputMain flex flex-col  `}>
      <div className="border-[#5EBD8E] border-b-[1.5px] lg:border-b-[0.078125vw]  lg:py-[0.78125vw] lg:px-[1.38020833333vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          id={id}
          className="w-full outline-none bg-transparent text22 placeholder:text22 placeholder:font-[500] text-[#132D2B] text-opacity-[0.5] placeholder:text-opacity-[0.5] placeholder:text-[#132D2B]"
        />
      </div>
      {error && (
        <span className="text18 z-[2] relative top-[100%] mt-[0.2vw] text-[#D51D5D] font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
