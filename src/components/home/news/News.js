import React from "react";
import NewsCard from "@/components/common/NewsCard";
import Content from "./Content";
import SmallCards from "./SmallCards";

const News = ({ content }) => {
  return (
    <section id="news">
      <div className="Container1640 py220 ">
        <Content
          tagline={content?.tagline}
          title={content?.title}
          desc={content?.desc}
        />
        <div className="mt56 flex flex-wrap sm:gap-y-[40px] gap-y-[30px] lg:gap-x-[2.08333333333vw]">
          {content?.news && content?.news.length > 0 && (
            <NewsCard
              content={content?.news[0]}
              heading="نحن معك في رحلتك نحو صفر نفايات (Zero Waste)"
              text="تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. "
              linkText="اقرا المزيد"
              link="/single-news"
              src="/images/home/news/bigcard.jpg"
              bigCard
            />
          )}
          {content?.news && content?.news.length > 1 && (
            <SmallCards news={content?.news} />
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
