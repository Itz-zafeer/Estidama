import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import getHeaderData from "@/lib/data-hook/getHeaderData";
import getFooterData from "@/lib/data-hook/getFooterData";

const Layout = async ({ children, deepGreen, arabic, translations }) => {
  const headerData = await getHeaderData(arabic);
  const footerData = await getFooterData(arabic);
  return (
    <>
      <Header deepGreen={deepGreen} translations={translations?.header} />
      <main>{children}</main>
      <Footer translations={translations?.footer} />
    </>
  );
};

export default Layout;
