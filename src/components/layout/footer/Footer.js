"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsLetter from "./NewsLetter";
import SocialIcons from "./SocialIcons";
import NavLinks from "./NavLinks";
import Copyright from "./Copyright";
import checkIfContentExist from "@/utils/setAltTag";
import useAos from "@/hooks/useAos";
import useDetectLang from "@/hooks/useDetectLang";
import { useRouter } from "next/navigation";

const Footer = ({ translations, navItems, socialIconsData, deepGreen }) => {
  useAos();
  useDetectLang();
  const router = useRouter();

  const scrollToSection = (id) => {
    if (deepGreen) {
      router.push("/#" + id.replace("Section", ""));
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id.replace("Section", "")}`);
    }
  };
  return (
    <footer>
      <div className="bg-[#3A8873]">
        <div className="lg:py-[4.6875vw] py220 Container1640 flex items-center lg:gap-x-[6.35416666667vw] flex-wrap sm:gap-y-[40px] gap-y-[35px]">
          <div>
            <span
              onClick={() => scrollToSection("heroSection")}
              className="relative cursor-pointer block lg:w-[8.85416666667vw] lg:h-[3.90625vw] sm:w-[160px] sm:h-[70px] w-[130px] h-[50px]"
            >
              <Image src="/images/icons/logo.svg" fill alt="logo" />
            </span>
            <p className="text18 mt24 lg:w-[19.7916666667vw] text-white">
              {translations?.textBelowLogo}{" "}
            </p>
          </div>
          <NavLinks navItems={navItems} scrollToSection={scrollToSection} />

          <div className="lg:max-w-[18.8541666667vw]">
            <h5 className="text20 f700 text-white">
              {translations?.newsletter_title}
              <NewsLetter translations={translations} />
              <SocialIcons socialIconsData={socialIconsData} />
            </h5>
          </div>
        </div>
      </div>
      <Copyright
        translations={checkIfContentExist(translations?.copyrightText)}
      />
    </footer>
  );
};

export default Footer;
