"use client";
import React, { useEffect, useRef, useState } from "react";
import BannerImg from "@/components/common/BannerImg";
import Content from "./Content";
import checkIfContentExist from "@/utils/setAltTag";
const Services = ({ content }) => {
  const [serviceItems, setServiceItems] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Adjust the visibility check threshold as needed
        const isVisible =
          rect.top <= window.innerHeight - (window.innerWidth / 100) * 3;
        if (isVisible && !hasStarted) {
          setHasStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the component is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const items = document.querySelectorAll(".service-category");

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
        items.forEach((it, ind) => {
          if (ind != index) {
            it.classList.remove("active");
          }
        });
      }, index * 5000);
    });
    setCurrentCategoryIndex(1);
    let indexx = 0;
    items &&
      items?.length > 0 &&
      items[indexx].classList.add("service-aniamtion");

    intervalRef.current = setInterval(() => {
      if (indexx !== items?.length - 1) {
        indexx++;
        items &&
          items?.length > 0 &&
          items[indexx].classList.add("service-aniamtion");
      }

      setCurrentCategoryIndex((prevIndex) => {
        if (prevIndex >= items?.length) {
          clearInterval(intervalRef.current);
          return items?.length; // Reset to 1 if it goes beyond 3
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [hasStarted]);

  const handleCategoryIndex = (selectedIndex) => {
    setCurrentCategoryIndex(selectedIndex);

    // clearInterval(intervalRef.current);
  };

  useEffect(() => {
    let newServices = [];
    content?.services?.forEach((service) => newServices.push(service));

    setServiceItems(newServices);
  }, []);

  return (
    <section ref={ref} id="servicesSection">
      <div className="Container1640 min-h-[48.9583333333vw] lg:pt-[11.4583333333vw] pt-[80px] sm:pt-[120px] flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-[9.375vw] sm:gap-y-[40px] gap-y-[30px] flex-wrap">
        {serviceItems?.length > 0 && (
          <>
            <Content
              serviceItems={serviceItems}
              content={content}
              currentCategoryIndex={currentCategoryIndex}
              handleCategoryIndex={handleCategoryIndex}
            />
            <BannerImg
              src={serviceItems[currentCategoryIndex - 1]?.service_image?.src}
              alt={checkIfContentExist(
                serviceItems[currentCategoryIndex - 1]?.service_image?.alt,
                serviceItems[currentCategoryIndex - 1]?.service_description
              )}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
