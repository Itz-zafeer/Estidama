import LinkBtn from "@/components/common/LinkBtn";
import React from "react";

const Content = ({ tagline, title, desc }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex items-start justify-between text-white flex-wrap gap-[14px]"
    >
      <div className="lg:w-[39.1145833333vw]">
        <span className="text24 f700 text-[#5EBD8E]">{tagline}</span>
        <h2
          className="text-[#132D2B] mt16 text60 f700"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <div
          className="text22 mt24 text-[#132D2B] text-opacity-[0.7]"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
      </div>
      <LinkBtn link={"/news"} text="اكتشف المزيد" />
    </div>
  );
};

export default Content;
