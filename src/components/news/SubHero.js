import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubHero = () => {
  return (
    <div className="Container1640 lg:pt-[17.2916666667vw] pt-[50vw] sm:pt-[40vw]">
      <div className=" lg:w-[39.1145833333vw]">
        <Link
          href="/"
          className="block relative lg:w-[2.70833333333vw] lg:h-[2.70833333333vw] sm:w-[40px] sm:h-[40px] w-[35px] h-[35px]"
        >
          <Image fill src="/images/icons/home.svg" alt="home" />
        </Link>
        <h1 className="text60 f700 lg:mt-[2.13541666667vw] mt32">
          آخر الاخبار في استدامة
        </h1>
        <p className="text22 mt24 text-[#132D2B] text-opacity-[0.7]">
          نحن نعمل على توفير حلول شاملة لإدارة النفايات، وتعزيز ثقافة إعادة
          التدوير والاستدامة. ونساهم في الحفاظ على البيئة وتقليل التلوث.
        </p>
      </div>
    </div>
  );
};

export default SubHero;
