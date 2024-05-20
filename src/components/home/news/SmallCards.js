import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = ({ news }) => {
  return (
    <div className="flex flex-col lg:gap-y-[2.08333333333vw] sm:gap-y-[30px] gap-y-[20px]">
      {news?.map((item, index) => {
        <SmallCard content={item} key={item?.slug} delay={index + 1 * 200} />;
      })}
    </div>
  );
};

export default SmallCards;
