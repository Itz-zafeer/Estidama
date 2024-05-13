import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = () => {
  return (
    <div className="flex flex-col lg:gap-y-[2.08333333333vw] sm:gap-y-[30px] gap-y-[20px]">
      <SmallCard
        date="يناير 21, 2024"
        heading="نكتشف الحلول لأجل مستقبل أخضر"
        link="اقرا المزيد"
        delay="200"
      />
      <SmallCard
        date="يناير 21, 2024"
        heading="ابدأ بتطوير إدارة النفايات مع استدامة"
        link="اقرا المزيد"
        delay="400"
      />
    </div>
  );
};

export default SmallCards;
