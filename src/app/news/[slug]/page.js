import { formatDate } from "@/components/common/NewsCard";
import Layout from "@/components/layout/Layout";
import SubHero from "@/components/single-news/SubHero";
import getSingleNewsData from "@/lib/data-hook/getSingleNewsData";
import { translations } from "@/translations";
import getMetaData from "@/utils/getMetaData";
import checkIfContentExist from "@/utils/setAltTag";
import Image from "next/image";
import React from "react";

export const revalidate = 5;
export async function generateMetadata({ params }, parent) {
  const data = await getSingleNewsData(params.slug, "arabic");
  return await getMetaData({
    slug: params.slug,
    isAr: true,
    fetchedData: data
  });
}
const page = async ({ params }) => {
  const slug = params.slug;
  const data = await getSingleNewsData(slug, "arabic");
  return (
    <Layout deepGreen arabic>
      <div className=" Container1640 pb220 lg:w-[70.8333333333vw] lg:pt-[17.2916666667vw] pt-[50vw] sm:pt-[40vw]">
        <SubHero
          arabic
          title={checkIfContentExist(data?.entry?.title)}
          img={data?.entry?.news_image?.src}
        />
        <div className="mt32">
          <div className="relative block w-full sm:h-[500px] h-[400px] lg:h-[34.6875vw]">
            {data?.entry?.news_image?.src && (
              <Image
                fill
                src={data?.entry?.news_image?.src}
                alt={checkIfContentExist(
                  data?.entry?.news_image?.alt,
                  data?.entry?.title,
                  "News Image"
                )}
                className="object-cover border20"
              />
            )}
            <span className="atlwhFull border20 bg-[#132D2B33]"></span>
          </div>
          <span className="text20 block mt32 lg:mt-[2.08333333333vw]">
            {formatDate(data?.entry?.date, "arabic")}
          </span>
          <div
            className=" news__Content"
            dangerouslySetInnerHTML={{
              __html: data?.entry?.news_description_with_html
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
