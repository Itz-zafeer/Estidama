import NewsCard from "@/components/common/NewsCard";
import Layout from "@/components/layout/Layout";
import NewsCardsContainer from "@/components/news/NewsCardsContainer";
import SubHero from "@/components/news/SubHero";
import getData from "@/lib/data-hook/getData";
import getNewsData from "@/lib/data-hook/getNewsData";
import { translations } from "@/translations";
import getMetaData from "@/utils/getMetaData";
import checkIfContentExist from "@/utils/setAltTag";
import React from "react";

export const revalidate = 5;
export async function generateMetadata({ params }, parent) {
  return await getMetaData({ slug: "news", isAr: false });
}

const page = async ({ searchParams }) => {
  const currentPage = +checkIfContentExist(searchParams?.pageNumber, 1);
  const newsData = await getNewsData(currentPage, "");
  const pageData = await getData("news", "");
  return (
    <Layout deepGreen>
      <SubHero
        title={pageData?.page?.news_title_heading}
        desc={pageData.page?.news_description}
      />
      <NewsCardsContainer
        newsData={newsData}
        currentPage={currentPage}
        lastPage={newsData?.entries.last_page}
      />
    </Layout>
  );
};

export default page;
