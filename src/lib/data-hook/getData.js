import getHomeData from "./getHomeData.js";
import getNewsPageData from "./getNewsPageData.js";
import getPagesData from "./getPagesData.js";

const getData = async (slug, isAr) => {
  const {
    pages: { data: pages }
  } = await getPagesData(isAr);

  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "home":
        return await getHomeData(slug, isAr);
      case "news":
        return await getNewsPageData(slug, isAr);
    }
  };

  for (const page of pages) {
    if (page.slug === slug) {
      const data = await handleData(page.blueprint);
      return data;
    }
  }
  return slug;
};

export default getData;
