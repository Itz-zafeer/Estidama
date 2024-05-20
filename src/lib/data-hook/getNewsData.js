import { getClient } from "../client";
import { newsQuery } from "../queries/newsQuery.js";

const getNewsData = async (current_page, limit, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    current_page,
    limit
  };

  try {
    const { data } = await getClient().query({
      query: newsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsData;
