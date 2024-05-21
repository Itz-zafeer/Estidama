import React from "react";
import BannerImg from "../../common/BannerImg";
import Content from "./Content";

const Mission = ({ content }) => {
  return (
    <section id="aboutSection">
      <div className="Container1640 flex items-center flex-wrap lg:gap-x-[4.63541666667vw] sm:gap-y-[40px] gap-y-[30px] lg:pt-[13.5416666667vw] pt220">
        <BannerImg src={content?.img?.src} alt={content?.img?.alt} />
        <Content
          title={content?.title}
          desc={content?.desc}
          counter1={content?.counter1}
          counter2={content?.counter2}
        />
      </div>
    </section>
  );
};

export default Mission;
