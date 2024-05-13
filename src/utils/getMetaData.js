import getData from "@/lib/data-hooks/getData";
import getGlobalData from "@/lib/data-hooks/getGlobalData";
import getPagesData from "@/lib/data-hooks/getPagesData";

const getMetaData = async ({ slug, parent }) => {
  console.log(slug);
  const {
    pages: { data: pagesData }
  } = await getPagesData();
  const data = await getData(slug, pagesData);
  const globalData = await getGlobalData();
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title;
  const previousDescription = (await parent).description;
  let newImages;
  if (
    data?.page?.seo_image &&
    data?.page?.seo_image.length > 0 &&
    data?.page?.seo_image[0]?.src
  ) {
    newImages = [data?.page?.seo_image[0]?.src, ...previousImages];
  } else if (
    globalData?.globalSet?.seo_image &&
    globalData?.globalSet?.seo_image.length > 0 &&
    globalData?.globalSet?.seo_image[0]?.src
  ) {
    newImages = [globalData?.globalSet?.seo_image[0]?.src, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.page?.seo_title
      ? data?.page?.seo_title
      : globalData?.globalSet?.seo_title
      ? globalData?.globalSet?.seo_title
      : previousTitle,
    description: data?.page?.seo_description
      ? data?.page?.seo_description
      : globalData?.globalSet?.seo_description
      ? globalData?.globalSet?.seo_description
      : previousDescription,
    keywords: data?.page?.seo_keywords
      ? data?.page?.seo_keywords
      : globalData?.globalSet?.seo_keywords,
    openGraph: {
      title: data?.page?.seo_title
        ? data?.page?.seo_title
        : globalData?.globalSet?.seo_title
        ? globalData?.globalSet?.seo_title
        : previousDescription,
      description: data?.page?.seo_description
        ? data?.page?.seo_description
        : globalData?.globalSet?.seo_description
        ? globalData?.globalSet?.seo_description
        : previousDescription,
      images: [...newImages],
      width: 1200,
      height: 628
    },
    twitter: {
      title: data?.page?.seo_title
        ? data?.page?.seo_title
        : globalData?.globalSet?.seo_title
        ? globalData?.globalSet?.seo_title
        : previousDescription,
      description: data?.page?.seo_description
        ? data?.page?.seo_description
        : globalData?.globalSet?.seo_description
        ? globalData?.globalSet?.seo_description
        : previousDescription,
      images: [...newImages],
      width: 1200,
      height: 628
    }
  };
};

export default getMetaData;
