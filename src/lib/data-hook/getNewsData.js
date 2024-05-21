import { getClient } from "../client";
import { newsQueryGQL } from "../queries/newsQueryGQL.js";

const getNewsData = async (current_page, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    current_page: current_page,
    limit: 4
  };
  try {
    const { data } = await getClient().query({
      query: newsQueryGQL(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsData;
