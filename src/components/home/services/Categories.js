import React from "react";
import Category from "./Category";

const Categories = ({ categories, handelActive, handelActiveCategory }) => {
  return (
    <div className="lg:mt-[2.5vw] mt-[20px] sm:mt-[30px] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[15px]">
      {categories.map((categoryItem, i) => (
        <Category
          key={i}
          i={i}
          categoryItem={categoryItem}
          handelActive={handelActive}
          handelActiveCategory={handelActiveCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
