import axiosRequest from "@/utils/axiosRequest";
import { newsQuery } from "../queries/newsQuery";

const getNewsUsingAxios = async (current_page, isAr) => {
  const variables = {
    limit: 4,
    current_page: current_page,
    site: isAr ? "arabic" : "english"
  };
  const reqData = JSON.stringify({
    query: newsQuery,
    variables: variables
  });
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    // url: "https://saudibanks.brackets-tech.com/graphql",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    headers: {
      "Content-Type": "application/json"
    },
    data: reqData
  };
  const data = await axiosRequest(config);
  return data;
};

export default getNewsUsingAxios;
