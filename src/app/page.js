import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Layout";
import getHomeData from "@/lib/data-hook/getHomeData";

const page = async () => {
  const data = await getHomeData("home", "arabic");
  return (
    <Layout arabic>
      <HomePage data={data?.page} arabic />
    </Layout>
  );
};

export default page;
