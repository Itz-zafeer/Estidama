"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SubHero = ({ title, img, arabic }) => {
  const [url, setUrl] = useState("");
  const socialContainerRef = useRef(null);
  const toggleSocialContainer = () => {
    socialContainerRef.current.classList.toggle("active");
  };
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <div className="flex justify-between items-center flex-wrap gap-y-[20px]">
      <div className="lg:w-[41.25vw]">
        <Link
          href={arabic ? "/news" : "/en/news"}
          className="flex items-center lg:items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]"
        >
          <img
            src="/images/icons/chevron-r-g.svg"
            alt="chevron"
            className="flipped lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px]"
          />
          <span className="text20 f700 text-[#5EBD8E]">الصفحة السابقة</span>
        </Link>
        <h1
          className="lg:text-[2.60416666667vw] lg:leading-[3.125vw] text60 f700 mt32"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
      </div>
      <div className="flex items-center gap-x-[20px] lg:gap-x-[1.25vw]  lg:flex-row-reverse">
        <span
          onClick={toggleSocialContainer}
          className="relative block cursor-pointer   lg:min-w-[3.4375vw] lg:w-[3.4375vw] lg:h-[3.4375vw] sm:w-[55px] sm:h-[55px] min-w-[45px] w-[45px] h-[45px]"
        >
          <Image fill src="/images/icons/share.svg" alt="share" className="" />
        </span>
        <div
          ref={socialContainerRef}
          className="w-[0] transition-all duration-500 overflow-hidden socialConteiner"
        >
          <div className="flex gap-x-[20px] lg:gap-x-[1.25vw] items-center flex-row-reverse">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
              target="_blank"
            >
              <img
                src="/images/icons/share_icons/linkedin.svg"
                alt="linkedin"
                className="min-w-[20px] w-[20px] lg:min-w-[1.25vw] lg:w-[1.25vw]"
              />
            </a>
            <a href={`instagram://library?AssetPath=${img}`} target="_blank">
              <img
                src="/images/icons/share_icons/instagram.svg"
                alt="linkedin"
                className="min-w-[20px] w-[20px] lg:min-w-[1.25vw] lg:w-[1.25vw]"
              />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
              target="_blank"
            >
              <img
                src="/images/icons/share_icons/x.svg"
                alt="linkedin"
                className="min-w-[20px] w-[20px] lg:min-w-[1.25vw] lg:w-[1.25vw]"
              />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
            >
              <img
                src="/images/icons/share_icons/facebook.svg"
                alt="linkedin"
                className="min-w-[20px] w-[20px] lg:min-w-[1.25vw] lg:w-[1.25vw]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
