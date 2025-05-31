"use client";

import { supabase } from "@/lib/supabase";
import { NewsItemWithCompany, RawNewsItemWithCompany } from "./types";

export const fetchNews = async (): Promise<NewsItemWithCompany[]> => {
  const { data, error } = await supabase
    .rpc("get_news_items_with_company")
    .returns<RawNewsItemWithCompany[]>();

  if (error) {
    throw new Error(error.message);
  }

  if (!Array.isArray(data)) {
    throw new Error("Unexpected data format received from Supabase RPC.");
  }

  const mappedData = data.map((item: RawNewsItemWithCompany) => {
    const mappedItem = {
      id: item.id,
      title: item.title,
      date: item.date,
      sector: item.sector,
      related_company: item.related_company,
      related_fund_id: item.related_fund_id,
      source: item.source,
      companies: item.company_names
        ? item.company_names.map((name: string) => ({ name }))
        : [],
    };
    console.log("Mapped item:", mappedItem);
    return mappedItem;
  });

  return mappedData;
};
