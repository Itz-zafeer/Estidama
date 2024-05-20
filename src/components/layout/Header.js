"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import LinkBtn from "../common/LinkBtn";
import useAos from "@/hooks/useAos";
import useDetectLang from "@/hooks/useDetectLang";

const initalNavLinks = [
  {
    id: "hero",
    y: 0,
    text: "الصفحة الرئيسية"
  },
  {
    id: "about",
    y: 0,
    text: "من نحن"
  },
  {
    id: "services",
    y: 0,
    text: "خدماتنا"
  },
  {
    id: "partners",
    y: 0,
    text: "شركاؤنا"
  },
  {
    id: "news",
    y: 0,
    text: "اخر الاخبار"
  }
];

// window.addEventListener("scroll", () => {
//   var header = document.getElementById("header");

//   if (window.scrollY > window.innerHeight / 2) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });

const Header = ({ deepGreen, translations }) => {
  const [handelActive, sethandelActive] = useState("");
  const [navLinks, setNavLinks] = useState(initalNavLinks);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useAos();
  useDetectLang();
  function toggleSidebar() {
    if (window.innerWidth < 1023) {
      const body = document.querySelector("body");
      const sideBar = document.querySelector(".sideBar");
      const menu = document.querySelector(".menu");
      body.classList.toggle("active");
      sideBar.classList.toggle("active");
      menu.classList.toggle("active");
    }
  }

  useEffect(() => {
    if (window?.location?.hash) {
      scrollToSection(window.location.hash.replace("#", ""));
    }
  }, []);

  useEffect(() => {
    var header = document.getElementById("header");

    const handleFixedHeader = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos && currentScrollPos !== 400) {
        header.classList.add("fixedHeader");
        setTimeout(() => {
          header.style.opacity = 1;
        }, 300);
      } else {
        header.style.opacity = 0;

        setTimeout(() => {
          header.classList.remove("fixedHeader");
        }, 300);
      }
      setPrevScrollPos(currentScrollPos);

      let scrollTop = window.scrollY;

      const activeLinkId = navLinks.reduce((acc, curr) => {
        if (scrollTop >= curr.y) {
          acc = curr.id;
        }
        return acc;
      }, null);
      console.log(activeLinkId);
      sethandelActive(activeLinkId);
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, [prevScrollPos]);

  useEffect(() => {
    const prevLinks = navLinks;
    navLinks.forEach((link, index) => {
      const yOffset = 0;
      const element = document.getElementById(link.id);
      const y =
        element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
      prevLinks[index].y = y;
    });
    setNavLinks(prevLinks);
  }, []);

  function scrollToSection(sectionId) {
    sethandelActive(sectionId);
    setPrevScrollPos(0);
    var headerHeight = document.getElementById("header").offsetHeight;
    // var headerHeight = 0;
    var sectionOffset =
      document.getElementById(sectionId)?.offsetTop + headerHeight;
    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth"
    });
  }

  const pathname = usePathname();
  let newPath = pathname.includes("/en/")
    ? pathname.replace("/en", "")
    : pathname == "/en"
    ? pathname.replace("/en", "")
    : "/en" + pathname;
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  newPath = page ? newPath + "?page=" + page : newPath;

  const router = useRouter();
  const handleLang = () => {
    router.push(newPath || "/");
  };
  return (
    <header
      id="header"
      className={`${
        deepGreen ? "deepGreen" : ""
      }  atlwhFull z-[10] h-[unset] lg:pt-[1.25vw] lg:px-[7.29166666667vw]   `}
    >
      <div className="flex justify-between items-center bg-[#132D2B] bg-opacity-[0.6] lg:border100 lg:py-[1.328125vw] lg:px-[2.91666666667vw] p-[30px] sm:p-[50px]">
        <Link
          href="/"
          className="relative z-[3] block lg:w-[6.25vw] lg:h-[2.76041666667vw] sm:w-[160px] sm:h-[70px] w-[130px] h-[50px]"
        >
          <Image src="/images/icons/logo.svg" fill alt="logo" />
        </Link>
        <nav className="text20 text-[#FFFFFF] flex lg:gap-x-[10.5729166667vw] items-center">
          <ul className="sideBar lg:h-[unset] lg:w-[unset] h-[100vh]  atlwhFull lg:static lg:p-[unset] px-[5%]  sm:pt-[40vw] pt-[50vw]  flex flex-col gap-y-[30px] sm:gap-y-[50px] lg:flex-row items-center lg:gap-x-[2.91666666667vw]">
            {navLinks.map((navLink, i) => (
              <li
                onClick={() => {
                  toggleSidebar();
                  setPrevScrollPos(0);
                  sethandelActive(navLink.id);
                }}
                key={i}
                className={`${
                  handelActive === navLink.id ? "active" : ""
                } lg:pb-[unset] pb-[2vw] border-b lg:border-b-[0] w-full lg:w-[unset]`}
              >
                <Link href={"/#" + navLink.id} className="block cursor-pointer">
                  {navLink.text}
                </Link>
              </li>
            ))}
            <li className="lg:hidden block mt-[30px] ">
              <span
                onClick={() => {
                  scrollToSection(navLink.id);
                  toggleSidebar();
                }}
                className={` block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[1.36927083333vw] lg:py-[0.52083333333vw] py-[8px] px-[25px] sm:py-[10px] sm:px-[30px]`}
              >
                تواصل معنا
              </span>
            </li>
          </ul>
          <div className="relative z-[3] flex lg:gap-x-[1.25vw] sm:gap-x-[30px] gap-x-[20px] items-center">
            <span
              onClick={handleLang}
              className="block uppercase text24 font-[900] langHandel cursor-pointer"
            >
              {translations?.languageSwitch}
            </span>
            <span className="  block lg:hidden w-[1px] sm:h-[30px] h-[20px]  bg-[#FFF] "></span>
            <div
              onClick={toggleSidebar}
              className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
            >
              <span className="top-0"></span>
              <span className="top-[30%]"></span>
              <span className="top-[60%]"></span>
            </div>
            <div className="hidden lg:block  ">
              <Link
                href="/#contact"
                onClick={() => {
                  toggleSidebar();
                  setPrevScrollPos(0);
                  sethandelActive("contact");
                }}
                className={` block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[1.36927083333vw] lg:py-[0.52083333333vw] py-[8px] px-[25px] sm:py-[10px] sm:px-[30px]`}
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
