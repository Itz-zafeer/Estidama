import React from "react";

const ServiceItem = ({
  handelActiveCategory,
  service,
  currentCategoryIndex,
  i,
  handleCategoryIndex
}) => {
  return (
    <button
      onClick={() => {
        handleCategoryIndex(i);
      }}
      className={`${
        currentCategoryIndex === i ? "active" : ""
      } service-category  lg:py-[2.91666666667vw] sm:py-[30px] py-[22px] border-[#5EBD8E]  relative  bg-[#5EBD8E0D]   rounded-bl-[0] rounded-br-[0] border20 text24 text-[#132D2B]  transition-all duration-[300] opacity-[0.3] `}
    >
      <span className="lg:w-[31.875vw] mx-[auto] w-[82%] sm:w-[88%] block text-start">
        {service?.service_description}
      </span>
    </button>
  );
};

export default ServiceItem;
