import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Layout";
import getHomeData from "@/lib/data-hook/getHomeData";
import getTranslationsData from "@/lib/data-hook/getTranslationsData";
import { translations } from "@/translations";
import getMetaData from "@/utils/getMetaData";

export const revalidate = 5;

export async function generateMetadata({ params }, parent) {
  return await getMetaData({ slug: "home" });
}

const page = async () => {
  const data = await getHomeData("home");
  const translationsData = await getTranslationsData();
  return (
    <Layout translations={translationsData?.layout}>
      <HomePage
        data={data?.page}
        translations={translationsData.translations}
      />
    </Layout>
  );
};

export default page;
