import React from "react";

const Content = ({ title, desc }) => {
  return (
    <div className="lg:w-[30.9375vw] text-center mx-[auto]">
      <h2
        className="text60 f700"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div
        className=" mt24 text22 text-opacity-[0.7] text-[#132D2B]"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></div>
    </div>
  );
};

export default Content;
