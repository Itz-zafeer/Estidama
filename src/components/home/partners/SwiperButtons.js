"use client";
import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtons = ({ white }) => {
  const swiper = useSwiper();
  const myNextButton = useRef(null);
  const myPrevButton = useRef(null);
  const handleDisable = (element) => {
    element
      .querySelectorAll([".swiper-button-prev", ".swiper-button-next"])
      .forEach(
        (btn) =>
          btn.classList.contains("chomu") &&
          btn.classList.remove("swiper-button-disabled")
      );
    element.querySelectorAll(".swiper-button-disabled").forEach((button) => {
      if (!button.classList.contains("chomu")) {
        if (button.classList.contains("swiper-button-next")) {
          element.querySelectorAll(".swiper-button-next").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        } else if (button.classList.contains("swiper-button-prev")) {
          element.querySelectorAll(".swiper-button-prev").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        }
      }
    });
  };
  useEffect(() => {
    if (swiper.isEnd) {
      if (myNextButton.current && myPrevButton.current) {
        myNextButton.current.style.display = "none";
        myPrevButton.current.style.display = "none";
      }
      if (swiper.el.querySelector(".swiper-pagination")) {
        swiper.el.querySelector(".swiper-pagination").style.display = "none";
      }
    }
  }, [myNextButton, myPrevButton]);

  useEffect(() => {
    handleDisable(myNextButton.current.parentElement);
  }, []);

  const handleSlideChange = () => {
    handleDisable(myNextButton.current.parentElement);
  };
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    handleDisable(event.target.parentElement.parentElement);
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    handleDisable(event.target.parentElement.parentElement);
  };
  return (
    <>
      <div
        ref={myNextButton}
        onClick={handleNext}
        className="swiper-button-next chomu   pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[2.96875vw] h-[2.96875vw]"
          viewBox="0 0 57 58"
          fill="none"
        >
          <path
            d="M40.7204 41.4076C39.7714 40.4635 39.7706 38.9277 40.7186 37.9825L47.9947 30.728C49.1705 29.5557 49.1705 27.6513 47.9947 26.479L40.7186 19.2245C39.7706 18.2793 39.7714 16.7436 40.7204 15.7994C41.6633 14.8614 43.1869 14.8614 44.1298 15.7994L54.8622 26.4767C56.0411 27.6495 56.0411 29.5575 54.8622 30.7303L44.1298 41.4076C43.1869 42.3456 41.6633 42.3456 40.7204 41.4076Z"
            fill={white ? "#fff" : "#2C3063"}
          />
        </svg>
      </div>
      <div
        ref={myPrevButton}
        onClick={handlePrev}
        className="swiper-button-prev chomu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[2.96875vw] h-[2.96875vw]"
          viewBox="0 0 57 58"
          fill="none"
        >
          <path
            d="M16.2796 41.4076C17.2286 40.4635 17.2294 38.9277 16.2814 37.9825L9.00529 30.728C7.82951 29.5557 7.82951 27.6513 9.00528 26.479L16.2814 19.2245C17.2294 18.2793 17.2286 16.7436 16.2796 15.7994C15.3367 14.8614 13.8131 14.8614 12.8702 15.7994L2.13776 26.4767C0.958895 27.6495 0.958895 29.5575 2.13776 30.7303L12.8702 41.4076C13.8131 42.3456 15.3367 42.3456 16.2796 41.4076Z"
            fill={white ? "#fff" : "#2C3063"}
          />
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons;
