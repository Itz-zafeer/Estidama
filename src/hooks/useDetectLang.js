import React, { useEffect } from "react";

const useDetectLang = (lang) => {
  useEffect(() => {
    const path = window.location.pathname;
    const htmlTag = document.querySelector("html");
    if (path == "/en" || path.includes("/en/")) {
      htmlTag.dir = "ltr";
      htmlTag.lang = "en";
      htmlTag.classList.add("ltr");
      htmlTag.classList.remove("rtl");
    } else {
      htmlTag.dir = "rtl";
      htmlTag.lang = "ar";
      htmlTag.classList.add("rtl");
      htmlTag.classList.remove("ltr");
    }
  }, []);
};

export default useDetectLang;
