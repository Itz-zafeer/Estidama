import Form from "@/components/home/form/Form";
import Hero from "@/components/home/hero/Hero";
import Mission from "@/components/home/mission/Mission";
import News from "@/components/home/news/News";
import Partners from "@/components/home/partners/Partners";
import Services from "@/components/home/services/Services";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Services />
      <Partners />
      <News />
      <Form />
    </Layout>
  );
};

export default page;
