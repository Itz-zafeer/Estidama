import React from "react";
import Overlays from "./Overlays";
import Content from "./Content";
import HeroImg from "./HeroImg";
import SkipSection from "./SkipSection";

const Hero = ({ content }) => {
  return (
    <section
      id="heroSection"
      className="h-screen w-full relative flex justify-center items-end lg:pb-[12.2916666667vw] sm:pb-[30vw] pb-[40vw]"
    >
      <div className="atlwhFull overflow-hidden">
        <Overlays />
        <HeroImg
          video={content?.video}
          mobVideo={content?.mobVideo}
          img={content?.img}
        />
        <SkipSection />
      </div>
      <Content title={content?.title} desc={content?.desc} />
    </section>
  );
};

export default Hero;
