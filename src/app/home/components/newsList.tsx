"use client";

import { Spin } from "antd";
import { useFetchNews } from "../hooks/useFetchNews";
import { NewsItem } from "./newsItem";

export const NewsList = () => {
  const { data: newsItems, isLoading, isError } = useFetchNews();

  return (
    <div className="flex flex-col gap-5">
      {isLoading ? (
        <span className="w-full h-[400px] flex items-center justify-center">
          <Spin />
        </span>
      ) : isError ? (
        <span className="h-[400px] text-gray-500 font-semibold w-full flex items-center justify-center">
          <p>Loading failed due to poor network</p>
        </span>
      ) : (
        newsItems?.map((news) => <NewsItem key={news.id} news={news} />)
      )}
    </div>
  );
};
