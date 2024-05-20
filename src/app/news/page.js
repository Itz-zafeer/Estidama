import NewsCard from "@/components/common/NewsCard";
import Layout from "@/components/layout/Layout";
import NewsCardsContainer from "@/components/news/NewsCardsContainer";
import SubHero from "@/components/news/SubHero";
import getNewsData from "@/lib/data-hook/getNewsData";
import React from "react";

const page = async () => {
  const currentPage = 1;
  const limit = 4;
  const newsData = await getNewsData(currentPage, limit, "arabic");
  return (
    <Layout deepGreen>
      <SubHero />
      <NewsCardsContainer newsData={newsData} />
    </Layout>
  );
};

export default page;
