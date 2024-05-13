import React from "react";
import Content from "./Content";
import Logos from "./Logos";

const Partners = () => {
  return (
    <section
      id="partners"
      className="lg:pt-[11.4583333333vw] pt-[80px] sm:pt-[120px]"
    >
      <div className="Container1640">
        <div className="lg:w-[50.625vw] mx-[auto]">
          <Content />
        </div>
      </div>
      <Logos />
    </section>
  );
};

export default Partners;
