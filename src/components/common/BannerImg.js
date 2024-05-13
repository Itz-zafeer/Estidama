import React from "react";
import Image from "next/image";
import { rgbDataURL } from "@/app/utils/rgbDataURL";

const BannerImg = ({ src, alt }) => {
  return (
    <div className="relative lg:w-[41.6666666667vw] sm:w-[80%] w-full h-[300px] sm:h-[400px] lg:h-[37.5vw] border20 overflow-hidden">
      <Image
        data-aos="fade"
        key={src}
        data-aos-duration="700"
        fill
        // blurDataURL={rgbDataURL(249, 165, 62)}
        // placeholder="blur"
        src={src}
        alt={alt}
        className="flipped object-cover border20"
      />
      <span className="atlwhFull bg-[#132D2B33]"></span>
    </div>
  );
};

export default BannerImg;
