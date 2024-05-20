import React from "react";
import Image from "next/image";

const HeroImg = ({ video, mobVideo, img }) => {
  return (
    <div className="atlwhFull z-[-1]">
      {img && (
        <Image fill src={img} alt="hero" className={`atlwhFull object-cover`} />
      )}
      <video
        src={video}
        className={`atlwhFull object-cover ${
          mobVideo ? " hidden sm:block " : ""
        }`}
        muted
        autoPlay
        loop
        playsInline
      />
      {mobVideo && (
        <video
          src={mobVideo}
          className={`atlwhFull object-cover sm:hidden`}
          muted
          autoPlay
          loop
          playsInline
        />
      )}
    </div>
  );
};

export default HeroImg;
