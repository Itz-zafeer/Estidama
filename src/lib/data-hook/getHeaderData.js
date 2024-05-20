import { getClient } from "../client";
import { headerQuery } from "../queries/headerQuery";

const getHeaderData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default"
  };

  try {
    const { data } = await getClient().query({
      query: headerQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getHeaderData;
