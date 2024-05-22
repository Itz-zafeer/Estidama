import getData from "@/lib/data-hook/getData";
import getPagesData from "@/lib/data-hook/getPagesData";

const getMetaData = async ({ slug, isAr, fetchedData }) => {
  const {
    pages: { data: pagesData }
  } = await getPagesData(isAr);
  const data = fetchedData ? fetchedData : await getData(slug, pagesData, isAr);

  const pageSeo = data?.page;
  const fallbackSeo = data?.globalSet;

  const title = pageSeo?.seo_title
    ? pageSeo?.seo_title
    : fallbackSeo?.seo_title;
  const description = pageSeo?.seo_description
    ? pageSeo?.seo_description
    : fallbackSeo?.seo_description;
  const keywords = pageSeo?.seo_keywords
    ? pageSeo?.seo_keywords
    : fallbackSeo?.seo_keywords;
  const image = pageSeo?.seo_image?.src
    ? pageSeo?.seo_image?.src
    : fallbackSeo?.seo_image?.src;

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628
    },
    twitter: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628
    }
  };
};

export default getMetaData;
