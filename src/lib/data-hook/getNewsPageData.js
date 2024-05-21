import { getClient } from "../client";
import { newsPageQuery } from "../queries/newsPageQuery.js";

const getNewsPageData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: newsPageQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsPageData;
