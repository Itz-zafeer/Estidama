import React from "react";
import NewsCard from "@/components/common/NewsCard";
import Content from "./Content";
import SmallCards from "./SmallCards";

const News = ({ content, arabic }) => {
  return (
    <section id="newsSection">
      <div className="Container1640 py220 ">
        <Content
          tagline={content?.tagline}
          title={content?.title}
          desc={content?.desc}
          arabic={arabic}
        />
        <div className="mt56 flex flex-wrap sm:gap-y-[40px] gap-y-[30px] lg:gap-x-[2.08333333333vw]">
          {content?.news && content?.news.length > 0 && (
            <NewsCard arabic={arabic} content={content?.news[0]} bigCard />
          )}
          {content?.news && content?.news.length > 1 && (
            <SmallCards news={content?.news} arabic={arabic} />
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
