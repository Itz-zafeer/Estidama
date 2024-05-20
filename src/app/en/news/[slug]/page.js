import Layout from "@/components/layout/Layout";
import SubHero from "@/components/single-news/SubHero";
import getSingleNewsData from "@/lib/data-hook/getSingleNewsData";
import getMetaData from "@/utils/getMetaData";
import checkIfContentExist from "@/utils/setAltTag";
import Image from "next/image";
import React from "react";

export const revalidate = 5;
export async function generateMetadata({ params }, parent) {
  return await getMetaData({ slug: params.slug });
}
const page = async ({ params }) => {
  const slug = params.slug;
  const data = await getSingleNewsData(slug);
  console.log(data);
  return (
    <Layout deepGreen>
      <div className=" Container1640 pb220 lg:w-[70.8333333333vw] lg:pt-[17.2916666667vw] pt-[50vw] sm:pt-[40vw]">
        <SubHero title={checkIfContentExist(data?.entry?.title)} />
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
          </div>
          <span className="text20 block mt32 lg:mt-[2.08333333333vw]">
            {data?.entry?.date}
          </span>
          <div
            className=" news__Content"
            dangerouslySetInnerHTML={{
              __html: checkIfContentExist(
                data?.entry?.news_description_with_html
              )
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
