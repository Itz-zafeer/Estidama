import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import getHeaderData from "@/lib/data-hook/getHeaderData";
import getFooterData from "@/lib/data-hook/getFooterData";

const Layout = async ({ children, deepGreen, arabic, translations }) => {
  const headerData = await getHeaderData(arabic);
  const footerData = await getFooterData(arabic);
  const socialIconsData = footerData?.globalSet?.social_icons;
  return (
    <>
      <Header deepGreen={deepGreen} translations={translations} />
      <main>{children}</main>
      <Footer
        translations={translations}
        navItems={footerData?.bottom_nav?.tree}
        socialIconsData={socialIconsData}
      />
    </>
  );
};

export default Layout;
