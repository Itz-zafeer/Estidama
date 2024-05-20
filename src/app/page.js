import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Layout";
import getHomeData from "@/lib/data-hook/getHomeData";
import { translations } from "@/translations";
import getMetaData from "@/utils/getMetaData";

export const revalidate = 5;

export async function generateMetadata({ params }, parent) {
  return await getMetaData({ slug: "home", isAr: true });
}

const page = async () => {
  const data = await getHomeData("home", "arabic");
  const translationsData = translations;
  return (
    <Layout arabic translations={translationsData?.layout}>
      <HomePage data={data?.page} arabic translations={translationsData} />
    </Layout>
  );
};

export default page;
