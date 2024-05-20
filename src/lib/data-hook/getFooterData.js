import { getClient } from "../client";
import { footerQuery } from "../queries/footerQuery.js";

const getFooterData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default"
  };

  try {
    const { data } = await getClient().query({
      query: footerQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getFooterData;
