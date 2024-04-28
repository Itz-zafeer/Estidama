import React from "react";
import NewsCard from "../common/NewsCard";
import Pagination from "./pagination/Pagination";
const newsData = [
  {
    date: "يناير 21, 2024",
    heading: "نحن معك في رحلتك نحو صفر نفايات (Zero Waste)",
    text: "تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. ",
    link: "/single-news",
    lintText: "اقرا المزيد",
    img: "/images/news/1.jpg"
  },
  {
    date: "يناير 21, 2024",
    heading: "نكتشف الحلول لأجل مستقبل أخضر",
    text: "تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. ",
    link: "/single-news",
    lintText: "اقرا المزيد",
    img: "/images/news/2.jpg"
  },
  {
    date: "يناير 21, 2024",
    heading: "نكتشف الحلول لأجل مستقبل أخضر",
    text: "تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. ",
    link: "/single-news",
    lintText: "اقرا المزيد",
    img: "/images/news/3.jpg"
  },
  {
    date: "يناير 21, 2024",
    heading: "ابدأ بتطوير إدارة النفايات مع استدامة",
    text: "تتنامى أعداد شركاء النجاح الذين يعملون معنا في المملكة العربية السعودية، وبكل فخر جميع شركاؤنا مستمرون معنا في شراكاتهم. لماذا؟ ملتزمون بالتميز في تقديم خدماتنا. ",
    link: "/single-news",
    lintText: "اقرا المزيد",
    img: "/images/news/4.jpg"
  }
];
const NewsCardsContainer = () => {
  return (
    <section>
      <div className="Container1640 pb220">
        <div className="mt56  flex flex-wrap sm:gap-[40px] gap-[30px] lg:gap-[2.08333333333vw] items-center">
          {newsData.map((newsDat, i) => (
            <NewsCard
              key={i}
              date={newsDat.date}
              heading={newsDat.heading}
              text={newsDat.text}
              linkText={newsDat.lintText}
              link={newsDat.link}
              src={newsDat.img}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default NewsCardsContainer;
