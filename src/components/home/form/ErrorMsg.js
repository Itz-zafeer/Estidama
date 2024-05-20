import Image from "next/image";
import React from "react";

const ErrorMsg = ({ message }) => {
  return (
    <div className="formFail w-full h-full absolute flex-col top-0 left-0 flex items-center justify-center pointer-events-none   ">
      <div className="flex items-center justify-center  flex-col">
        <span className="text35  text-red-600 f700  text-center capitalize">
          {message}
        </span>
        <div className="relative lg:w-[2.5vw] lg:h-[2.5vw] mt-[16px] lg:mt-[1vw] sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]">
          <Image fill src="/images/icons/error.svg" alt="error" />
        </div>
      </div>
    </div>
  );
};

export default ErrorMsg;
