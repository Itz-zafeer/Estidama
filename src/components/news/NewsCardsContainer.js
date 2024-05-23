"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import NewsCard from "../common/NewsCard";
import Pagination from "./pagination/Pagination";
import NewsCardSkelton from "../common/NewsCardSkelton";
import getNewsUsingAxios from "@/lib/data-hook/getNewsUsingAxios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function useSkipFirstRenderEffect(effect, deps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      effect();
    } else {
      isFirstRender.current = false;
    }
  }, deps);
}

const NewsCardsContainer = ({ newsData, currentPage, lastPage, arabic }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);
  const [lastPageNumber, setLastPageNumber] = useState(lastPage);
  const [news, setNews] = useState(newsData?.entries?.data);
  const [isLoading, setIsloading] = useState(false);
  const containerRef = useRef(null);

  const updateData = async () => {
    setIsloading(true);

    const url = new URL(window.location.href);

    // Set or update the query parameter
    url.searchParams.set("pageNumber", currentPageNumber);

    // Use history.pushState to update the URL in the address bar without reloading the page
    history.pushState(null, "", url.toString());

    const { data } = await getNewsUsingAxios(currentPageNumber, arabic);
    setNews(data?.data?.entries?.data);
    setIsloading(false);
  };

  const updateScroll = () => {
    if (window.innerWidth < 768) {
      const offset = document.querySelector("header").offsetHeight;
      const y =
        containerRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useSkipFirstRenderEffect(() => {
    updateData();
    updateScroll();
  }, [currentPageNumber]);

  return (
    <section ref={containerRef}>
      <div className="Container1640 pb220">
        <div className="mt56  flex flex-wrap sm:gap-[40px] gap-[30px] lg:gap-[2.08333333333vw] items-center">
          {isLoading
            ? [1, 2, 3, 4].map((item) => <NewsCardSkelton key={item} />)
            : news?.map((newsItem, i) => (
                <NewsCard key={i} content={newsItem} arabic={arabic} />
              ))}
        </div>
        <Pagination
          currentPage={currentPageNumber}
          lastPage={lastPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      </div>
    </section>
  );
};

export default NewsCardsContainer;
