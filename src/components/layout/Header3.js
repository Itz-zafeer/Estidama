"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [navLinks] = useState(initialNavLinks);
  const [activeLink, setActiveLink] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      history.pushState(null, "", `#${id.replace("Section", "")}`);
    }
  };

  useEffect(() => {
    // Check initial hash and scroll to the section
    const hash = window.location.hash.substring(1);
    const initialSectionId = `${hash}Section`;
    if (hash && document.getElementById(initialSectionId)) {
      setActiveLink(initialSectionId);
      document
        .getElementById(initialSectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    // Observer to update active link on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(id);
            history.pushState(null, "", `#${id.replace("Section", "")}`);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    // Observe each section
    navLinks.forEach((navLink) => {
      const section = document.getElementById(navLink.id);
      if (section) observer.observe(section);
    });

    // Handle fixed header on scroll
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        if (!isFixed) {
          setIsFixed(true);
        }
      } else {
        if (isFixed) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup observer on unmount
      navLinks.forEach((navLink) => {
        const section = document.getElementById(navLink.id);
        if (section) observer.unobserve(section);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks, isFixed]);

  useEffect(() => {
    if (isFixed) {
      document.getElementById("header").classList.add("visible");
    } else {
      document.getElementById("header").classList.remove("visible");
    }
  }, [isFixed]);

  return (
    <header
      id="header"
      className={`header ${deepGreen ? "deepGreen" : ""} ${
        isFixed ? " myFixed deepGreen" : ""
      } atlwhFull z-[10] h-[unset] lg:pt-[1.25vw] lg:px-[7.29166666667vw] `}
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
                  scrollToSection(navLink.id);
                }}
                key={i}
                className={`${
                  activeLink === navLink.id ? "active" : ""
                } lg:pb-[unset] pb-[2vw] border-b lg:border-b-[0] w-full lg:w-[unset]`}
              >
                <span className="block cursor-pointer">{navLink.text}</span>
              </li>
            ))}
            <li className="lg:hidden block mt-[30px]">
              <span
                onClick={() => {
                  scrollToSection(navLinks[navLinks?.length - 1]?.id);
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
                  scrollToSection(navLinks[navLinks?.length - 1]?.id);
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
