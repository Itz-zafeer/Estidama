"use client";
import React, { useEffect, useRef } from "react";

const SwiperButtons = ({ en, swiper, disable, awardSwiper }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  function handleDisable() {
    const isFirstSlide = swiper?.activeIndex === 0;
    // const isLastSlide = swiper?.activeIndex === swiper?.slides.length - 3;
    const isLastSlide = awardSwiper
      ? swiper?.activeIndex === swiper?.slides?.length - 1
      : swiper?.activeIndex === swiper?.slides?.length - 3;

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    if (prevButton) {
      if (isFirstSlide) {
        prevButton.classList.add("swiper-button-disabled");
      } else {
        prevButton.classList.remove("swiper-button-disabled");
      }
    }

    if (nextButton) {
      if (isLastSlide) {
        nextButton.classList.add("swiper-button-disabled");
      } else {
        nextButton.classList.remove("swiper-button-disabled");
      }
    }
  }

  const handleSlideChange = () => {
    if (!disable) {
      handleDisable();
    }
  };
  useEffect(() => {
    if (!disable) {
      handleDisable();
    }
  }, []);
  useEffect(() => {
    swiper?.on("slideChange", handleSlideChange);
    return () => {
      swiper?.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper?.slideNext();
    if (!disable) {
      handleDisable();
    }
  };
  const handlePrev = (event) => {
    swiper?.slidePrev();
    if (!disable) {
      handleDisable();
    }
  };

  useEffect(() => {
    if (swiper?.isEnd) {
      if (nextButtonRef.current && prevButtonRef.current) {
        nextButtonRef.current.style.display = "none";
        prevButtonRef.current.style.display = "none";
      }
      if (swiper?.el.querySelector(".swiper-pagination")) {
        swiper.el.querySelector(".swiper-pagination").style.display = "none";
      }
    }
  }, [nextButtonRef, prevButtonRef]);

  return (
    <>
      <div
        ref={nextButtonRef}
        onClick={handleNext}
        className="swiper-button-next"
      >
        <svg
          className={` cursor-pointer flipped  `}
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={28}
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.260193 13.2564L12.4968 0.29898C12.8645 -0.0903429 13.4862 -0.100782 13.8846 0.275521C14.2831 0.651825 14.3082 1.27308 13.9406 1.6624L3.6238 12.5869C3.49846 12.8994 3.40565 13.2474 3.36603 13.6065C3.31422 14.0763 3.35227 14.557 3.52479 15.0054L15.1368 25.9714C15.536 26.3484 15.5604 26.969 15.1927 27.3583C14.8245 27.7482 14.2041 27.7587 13.8049 27.3817L0.316119 14.6433C-0.0823517 14.267 -0.108071 13.6464 0.260193 13.2564Z"
            fill="#5EBD8E"
          />
        </svg>

      </div>
      <div
        onClick={handlePrev}
        ref={prevButtonRef}
        className="swiper-button-prev"
      >
        <svg
          className={` lg:w-[0.78125vw] w-[11px] cursor-pointer flipped `}
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={28}
          viewBox="0 0 16 28"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1929 13.2564L2.95629 0.29898C2.58862 -0.0903429 1.96695 -0.100782 1.56848 0.275521C1.17001 0.651825 1.14489 1.27308 1.51255 1.6624L11.8293 12.5869C11.9547 12.8994 12.0475 13.2474 12.0871 13.6065C12.1389 14.0763 12.1009 14.557 11.9283 15.0054L0.316324 25.9714C-0.0828684 26.3484 -0.107269 26.969 0.260396 27.3583C0.628661 27.7482 1.24901 27.7587 1.6482 27.3817L15.137 14.6433C15.5355 14.267 15.5612 13.6464 15.1929 13.2564Z"
            fill="#5EBD8E"
          />
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons;