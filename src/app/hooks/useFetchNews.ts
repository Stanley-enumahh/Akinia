"use client";

import { useQuery } from "@tanstack/react-query";
import { NewsType } from "../home/types";
import { fetchNews } from "../home/news";

export const useFetchNews = () => {
  return useQuery<NewsType[], Error>({
    queryKey: ["news"],
    queryFn: fetchNews,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 10,
    networkMode: "offlineFirst",
  });
};
