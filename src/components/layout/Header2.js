"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import LinkBtn from "../common/LinkBtn";
import useAos from "@/hooks/useAos";
import useDetectLang from "@/hooks/useDetectLang";

const initialNavLinks = [
  {
    id: "heroSection",
    text: "الصفحة الرئيسية"
  },
  {
    id: "aboutSection",
    text: "من نحن"
  },
  {
    id: "servicesSection",
    text: "خدماتنا"
  },
  {
    id: "partnersSection",
    text: "شركاؤنا"
  },
  {
    id: "newsSection",
    text: "اخر الاخبار"
  },
  {
    id: "contactSection",
    text: "تواصل معنا"
  }
];

const Header = ({ deepGreen, translations }) => {
  const [navLinks, setNavLinks] = useState(initialNavLinks);
  const [activeLink, setActiveLink] = useState(initialNavLinks[0].id);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${id.replace("Section", "")}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navLinks.forEach((navLink) => {
        const section = document.getElementById(navLink.id);
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = navLink.id;
        }
      });
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <header
      id="header"
      className={`${
        deepGreen ? "deepGreen" : ""
      } atlwhFull fixed z-[10] h-[unset] lg:pt-[1.25vw] lg:px-[7.29166666667vw]`}
    >
      <div className="flex justify-between items-center bg-[#132D2B] bg-opacity-[0.6] lg:border100 lg:py-[1.328125vw] lg:px-[2.91666666667vw] p-[30px] sm:p-[50px]">
        <span
          href="/"
          className="relative z-[3] block lg:w-[6.25vw] lg:h-[2.76041666667vw] sm:w-[160px] sm:h-[70px] w-[130px] h-[50px]"
        >
          <Image src="/images/icons/logo.svg" fill alt="logo" />
        </span>
        <nav className="text20 text-[#FFFFFF] flex lg:gap-x-[10.5729166667vw] items-center">
          <ul className="sideBar lg:h-[unset] lg:w-[unset] h-[100vh] atlwhFull lg:static lg:p-[unset] px-[5%] sm:pt-[40vw] pt-[50vw] flex flex-col gap-y-[30px] sm:gap-y-[50px] lg:flex-row items-center lg:gap-x-[2.91666666667vw]">
            {navLinks.map((navLink, i) => (
              <li
                onClick={() => {
                  handleScroll(navLink.id);
                }}
                key={i}
                className={`${
                  activeLink === navLink.id ? "active" : ""
                } lg:pb-[unset] pb-[2vw] border-b lg:border-b-[0] w-full lg:w-[unset]`}
              >
                <span className="block cursor-pointer">{navLink.text}</span>
              </li>
            ))}
            <li className="lg:hidden block mt-[30px] ">
              <span
                onClick={() => {
                  handleScroll(navLinks[navLinks?.length - 1]?.id);
                }}
                className={`block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[1.36927083333vw] lg:py-[0.52083333333vw] py-[8px] px-[25px] sm:py-[10px] sm:px-[30px]`}
              >
                {navLinks[navLinks?.length - 1]?.text}
              </span>
            </li>
          </ul>
          <div className="relative z-[3] flex lg:gap-x-[1.25vw] sm:gap-x-[30px] gap-x-[20px] items-center">
            <span className="block uppercase text24 font-[900] langHandel cursor-pointer">
              {translations?.languageSwitch}
            </span>
            <span className="block lg:hidden w-[1px] sm:h-[30px] h-[20px] bg-[#FFF]"></span>
            <div className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]">
              <span className="top-0"></span>
              <span className="top-[30%]"></span>
              <span className="top-[60%]"></span>
            </div>
            <div className="hidden lg:block">
              <span
                onClick={() => {
                  handleScroll(navLinks[navLinks?.length - 1]?.id);
                }}
                className={`block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[1.36927083333vw] lg:py-[0.52083333333vw] py-[8px] px-[25px] sm:py-[10px] sm:px-[30px]`}
              >
                {navLinks[navLinks?.length - 1]?.text}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
