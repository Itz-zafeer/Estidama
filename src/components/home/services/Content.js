import React from "react";
import Category from "./Category";
import Categories from "./Categories";

const Content = ({ categories, handelActive, handelActiveCategory }) => {
  return (
    <div className="lg:w-[34.375vw]">
      <h2 className="text60 f700">خدماتنا</h2>
      <Categories
        categories={categories}
        handelActive={handelActive}
        handelActiveCategory={handelActiveCategory}
      />
    </div>
  );
};

export default Content;
