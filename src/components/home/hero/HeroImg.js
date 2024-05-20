import React from "react";
import Image from "next/image";

const HeroImg = ({ video, mobVideo }) => {
  return (
    <div className="atlwhFull z-[-1]">
      {/* <Image
        fill
        src="/images/home/hero/hero.jpg"
        alt="hero"
        className={`atlwhFull object-cover`}
      /> */}
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
