import NewsCard from "@/components/common/NewsCard";
import Layout from "@/components/layout/Layout";
import NewsCardsContainer from "@/components/news/NewsCardsContainer";
import SubHero from "@/components/news/SubHero";
import getData from "@/lib/data-hook/getData";
import getNewsData from "@/lib/data-hook/getNewsData";
import { translations } from "@/translations";
import getMetaData from "@/utils/getMetaData";
import React from "react";

export const revalidate = 5;
export async function generateMetadata({ params }, parent) {
  return await getMetaData({ slug: "news" });
}

const page = async () => {
  const currentPage = 1;
  const limit = 4;
  const newsData = await getNewsData(currentPage, limit);
  const pageData = await getData("news");
  const translationsData = translations;

  return (
    <Layout deepGreen translations={translationsData?.layout}>
      <SubHero
        title={pageData?.page?.news_title_heading}
        desc={pageData.page?.news_description}
      />
      <NewsCardsContainer newsData={newsData} />
    </Layout>
  );
};

export default page;
