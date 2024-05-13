import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="relative z-[2] Container1640">
      <div className=" text-[#FFFFFF] lg:w-[41.6666666667vw] mx-[auto] text-center">
        <div className="relative">
          <h1 data-aos="fade-up" className="text60 f700">
            نسعى لتحقيق الريادة في تبني أفضل الممارسات البيئية
          </h1>
          <div
            data-aos="fade"
            data-aos-delay="200"
            className="absolute lg:w-[1.5625vw] lg:h-[1.5625vw] sm:w-[28px] sm:h-[28px] w-[22px] h-[22px] lg:top-[-1.5625vw] sm:top-[-30px] top-[-26px] transform translate-x-[-50%] left-[50%]"
          >
            <Image
              fill
              src="/images/icons/heading-leaf.svg"
              alt="heading-leaf"
              className="flipped"
            />
          </div>
        </div>
        <p
          data-aos="fade-down"
          className="text24 mt24 lg:w-[36.4583333333vw] mx-[auto]"
        >
          نحن نعمل على تحسين الكفاءة والجودة في عمليات التجميع، والفرز، وتطوير
          عمليات إعادة التدوير المبتكرة للمواد المجمعة و نسعى لتعزيز التعاون مع
          الشركاء، والمجتمعات المحلية، والجهات الحكومية لتعزيز ثقافة إعادة
          التدوير .
        </p>
      </div>
    </div>
  );
};

export default Content;
