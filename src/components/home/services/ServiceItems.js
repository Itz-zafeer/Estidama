import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceItems = ({
  serviceItems,
  currentCategoryIndex,
  handleCategoryIndex
}) => {
  return (
    <div className="lg:mt-[2.5vw] mt-[20px] sm:mt-[30px] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[15px]">
      {serviceItems.map((service, i) => (
        <ServiceItem
          key={i}
          i={i + 1}
          service={service}
          currentCategoryIndex={currentCategoryIndex}
          handleCategoryIndex={handleCategoryIndex}
        />
      ))}
    </div>
  );
};

export default ServiceItems;
