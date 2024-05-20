import React from "react";

const Content = ({ title, desc }) => {
  return (
    <div className="text-center lg:w-[39.1145833333vw] mx-[auto]">
      <h2
        data-aos="fade-up"
        className="text60 f700"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div
        data-aos="fade-down"
        className="text22 mt24 text-opacity-[0.7] text-[#132D2B]"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></div>
    </div>
  );
};

export default Content;
