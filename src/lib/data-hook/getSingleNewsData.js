import { getClient } from "../client";
import { singleNewsQuery } from "../queries/singleNewsQuery.js";

const getSingleNewsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };

  try {
    const { data } = await getClient().query({
      query: singleNewsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSingleNewsData;
