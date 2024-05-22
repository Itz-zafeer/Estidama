import { getClient } from "../client";
import { translationsQuery } from "../queries/translationsQuery.js";

const getTranslationsData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };

  try {
    const { data } = await getClient().query({
      query: translationsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getTranslationsData;
