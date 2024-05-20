import Form from "@/components/home/form/Form";
import Hero from "@/components/home/hero/Hero";
import Mission from "@/components/home/mission/Mission";
import News from "@/components/home/news/News";
import Partners from "@/components/home/partners/Partners";
import Services from "@/components/home/services/Services";
import checkIfContentExist from "@/utils/setAltTag";
import setAltTag from "@/utils/setAltTag";
const HomePage = ({ data, arabic, translations }) => {
  const heroContent = {
    title: checkIfContentExist(data?.hero_title),
    desc: checkIfContentExist(data?.hero_description),
    video: data?.hero_home_video?.permalink,
    mobVideo: data?.hero_home_mobile_video?.permalink,
    img: data?.hero_fallback_image?.src
  };
  const aboutContent = {
    img: {
      src: data?.about_image?.src,
      alt: checkIfContentExist(data?.about_image?.src, "About Image")
    },
    title: checkIfContentExist(data?.about_heading_with_html),
    desc: checkIfContentExist(data?.about_description),
    counter1: {
      title: data?.counter[0]?.counter_label,
      desc: data?.counter[0]?.counter_description,
      number: data?.counter[0]?.counter_number
    },
    counter2: {
      title: data?.counter[1]?.counter_label,
      desc: data?.counter[1]?.counter_description,
      number: data?.counter[1]?.counter_number
    }
  };
  const servicesContent = {
    title: checkIfContentExist(data?.services_title_heading),
    services: data?.services
  };
  const partnersContent = {
    title: checkIfContentExist(data?.companies_title_heading),
    desc: checkIfContentExist(data?.companies_description),
    logos: data?.logos
  };
  const newsContent = {
    tagline: data?.news_smaller_title_heading,
    title: checkIfContentExist(data?.news_title_heading),
    desc: checkIfContentExist(data?.news_description),
    news: data?.selected_news
  };
  const formContent = {
    title: checkIfContentExist(data?.contact_title_heading),
    desc: checkIfContentExist(data?.contact_description)
  };
  return (
    <>
      <Hero content={heroContent} arabic={arabic} />
      <Mission content={aboutContent} arabic={arabic} />
      <Services content={servicesContent} arabic={arabic} />
      <Partners content={partnersContent} arabic={arabic} />
      <News content={newsContent} arabic={arabic} />
      <Form
        content={formContent}
        arabic={arabic}
        translations={translations?.form}
      />
    </>
  );
};

export default HomePage;
