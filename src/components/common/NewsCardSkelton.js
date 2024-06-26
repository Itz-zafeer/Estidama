import checkIfContentExist from "@/utils/setAltTag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCardSkelton = () => {
  return (
    <div
      data-aos="fade"
      className="flex flex-wrap  sm:gap-y-[25px] gap-y-[20px] items-center lg:gap-x-[2.08333333333vw]"
    >
      <div
        className={`relative animate-pulse lg:w-[19.7916666667vw] lg:h-[17.8125vw] sm:w-[70%] w-full h-[250px] sm:h-[350px]`}
      >
        <span className="atlwhFull border20 bg-[#132D2B33]"></span>
      </div>
      <div className="lg:w-[19.7916666667vw] w-full">
        <span className="text18 bg-[#132D2B33] text-[red] border20 animate-pulse text-opacity-0">
          lorem lorem lorem
        </span>
        <h4 className="text26 f700 mt12     flex gap-y-[0.5vw] flex-col">
          <span className="bg-[#132D2B33] text-[red] border20 animate-pulse text-opacity-0">
            lorem lorem lorem lorem
          </span>
          <span className="bg-[#132D2B33] text-[red] border20 animate-pulse text-opacity-0">
            lorem lorem lorem
          </span>
        </h4>
        <div className="text22 text-[#132D2B] mt16 line-clamp-[5] lg:h-[6.77083333333vw] bg-[#132D2B33] text-[red] border20 animate-pulse text-opacity-0">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem
        </div>
        <div className="   mt32 flex items-center lg:items-end lg:gap-x-[0.52083333333vw] sm:gap-x-[10px] gap-x-[8px] bg-[#132D2B33] text-[red] border20 animate-pulse text-opacity-0">
          <span className="text24 ">{"Read More"}</span>
          <svg
            width="24"
            height="25"
            className="flipped lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px]"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46934 13.0298C3.32889 12.8892 3.25 12.6986 3.25 12.4998C3.25 12.3011 3.32889 12.1105 3.46934 11.9698L9.46934 5.96985C9.538 5.89616 9.6208 5.83706 9.7128 5.79607C9.8048 5.75507 9.90412 5.73303 10.0048 5.73126C10.1055 5.72948 10.2055 5.748 10.2989 5.78572C10.3923 5.82344 10.4772 5.87959 10.5484 5.95081C10.6196 6.02203 10.6757 6.10686 10.7135 6.20025C10.7512 6.29364 10.7697 6.39367 10.7679 6.49437C10.7662 6.59507 10.7441 6.69439 10.7031 6.78639C10.6621 6.87838 10.603 6.96119 10.5293 7.02985L5.80934 11.7498H19.9993C20.1983 11.7498 20.389 11.8289 20.5297 11.9695C20.6703 12.1102 20.7493 12.3009 20.7493 12.4998C20.7493 12.6988 20.6703 12.8895 20.5297 13.0302C20.389 13.1708 20.1983 13.2498 19.9993 13.2498H5.80934L10.5293 17.9698C10.603 18.0385 10.6621 18.1213 10.7031 18.2133C10.7441 18.3053 10.7662 18.4046 10.7679 18.5053C10.7697 18.606 10.7512 18.7061 10.7135 18.7994C10.6757 18.8928 10.6196 18.9777 10.5484 19.0489C10.4772 19.1201 10.3923 19.1762 10.2989 19.214C10.2055 19.2517 10.1055 19.2702 10.0048 19.2684C9.90412 19.2667 9.8048 19.2446 9.7128 19.2036C9.6208 19.1626 9.538 19.1035 9.46934 19.0298L3.46934 13.0298Z"
              fill="#5EBD8E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkelton;
