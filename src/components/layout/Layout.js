import React from "react";
// import Header from "./Header";
import Footer from "./footer/Footer";
import getHeaderData from "@/lib/data-hook/getHeaderData";
import getFooterData from "@/lib/data-hook/getFooterData";
import Header from "./Header2";
import getTranslationsData from "@/lib/data-hook/getTranslationsData";

const Layout = async ({ children, deepGreen, arabic }) => {
  const headerData = await getHeaderData(arabic);
  const footerData = await getFooterData(arabic);
  const translationsData = await getTranslationsData(arabic);
  const translations = translationsData.translations.layout;
  const socialIconsData = footerData?.globalSet?.social_icons;
  const formattedHeaderData = [];
  headerData?.main_nav?.tree.forEach(({ page }) => {
    formattedHeaderData.push({
      text: page?.title,
      id: page?.permalink.replace("#", "") + "Section"
    });
  });
  console.log(translationsData.translations.layout);
  return (
    <>
      <Header
        deepGreen={deepGreen}
        translations={translations}
        initialNavLinks={formattedHeaderData}
      />
      <main>{children}</main>
      <Footer
        translations={translations}
        deepGreen={deepGreen}
        navItems={footerData?.bottom_nav?.tree}
        socialIconsData={socialIconsData}
      />
    </>
  );
};

export default Layout;
