import Link from "next/link";
import React from "react";

const Copyright = ({ translations }) => {
  return (
    <div className="relative bg-[#3A8873] text-center lg:py-[0.9375vw] py-[18px]">
      <span className="bg-[#132D2B] bg-opacity-[0.2] atlwhFull"></span>
      <div
        className="relative z-[2] text17 text-white Container1640 block"
        dangerouslySetInnerHTML={{ __html: translations }}
      ></div>
    </div>
  );
};

export default Copyright;
