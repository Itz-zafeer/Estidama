"use client";
import React, { useEffect, useRef, useState } from "react";

const Content = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const isInViewport = () => {
    const rect = ref.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const animateNumber = () => {
    let start = 0;
    const end = 40;
    const end2 = 19;
    const duration = 2000; // in milliseconds
    const range = end - start;
    const range2 = end2 - start;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * range));
      setCount2(Math.floor(percentage * range2));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasAnimated) {
        const currentlyInView = isInViewport();
        if (currentlyInView && !hasAnimated) {
          setHasAnimated(true);
          animateNumber();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div ref={ref} className="lg:w-[37.3958333333vw]">
      <div>
        <h3 data-aos="fade-up" data-aos-delay="200" className="text35">
          مهمتنا هي جمع المواد القابلة للتدوير من مصادر مختلفة مثل القطاعات
          التجارية والسكنية، والصناعية بمحافظة{" "}
          <span className="text-[#5EBD8E]">جدة</span>، وتصنيفها، وفرزها بطريقة
          فعالة لإعادة التدوير
        </h3>
        <p
          data-aos="fade-down"
          data-aos-delay="200"
          className="text22 text-[#132D2B] text-opacity-[0.7] mt12"
        >
          نحن نعمل على توفير حلول شاملة لإدارة النفايات، وتعزيز ثقافة إعادة
          التدوير والاستدامة. ونساهم في الحفاظ على البيئة وتقليل التلوث من خلال
          جمع، وفرز المواد القابلة للتدوير، ثم إعادة تدويرها من خلال المصانع
          المحلية.
        </p>
      </div>
      <div
        data-aos="fade"
        data-aos-delay="400"
        className="flex items-center lg:gap-x-[4.42708333333vw] sm:gap-x-[55px] gap-[10px] flex-wrap lg:mt-[2.08333333333vw] sm:mt-[30px] mt-[20px]"
      >
        <div>
          <div className="flex items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]">
            {/* <span className='text100 text-[#5EBD8E]'>٤٠</span> */}
            <span className="text100 text-[#5EBD8E]">{count}</span>
            <span className="text20 text-[#000000] text-opacity-[0.7] lg:mb-[0.3125vw] mb-[6px]">
              شاحنة{" "}
            </span>
          </div>
          <p className="text17 text-[#000000] mt12 lg:mt-[0.52083333333vw]">
            تقوم بجمع ونقل المواد القابلة لإعادة التدوير
          </p>
        </div>
        <div>
          <div className="flex items-end lg:gap-x-[0.20833333333vw] gap-x-[4px]">
            {/* <span className='text100 text-[#5EBD8E]'>١٩ </span> */}
            <span className="text100 text-[#5EBD8E]">{count2} </span>
            <span className="text20 text-[#000000] text-opacity-[0.7] lg:mb-[0.3125vw] mb-[6px]">
              مركز{" "}
            </span>
          </div>
          <p className="text17 text-[#000000] mt12 lg:mt-[0.52083333333vw]">
            جميع مراكزنا مجهزة لاستلام المواد
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
