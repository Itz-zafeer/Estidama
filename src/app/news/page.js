import NewsCard from "@/components/common/NewsCard";
import Layout from "@/components/layout/Layout";
import NewsCardsContainer from "@/components/news/NewsCardsContainer";
import SubHero from "@/components/news/SubHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Layout deepGreen>
      <SubHero />
      <NewsCardsContainer />
    </Layout>
  );
};

export default page;
