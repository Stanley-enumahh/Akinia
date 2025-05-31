"use client";

import { supabase } from "@/lib/supabase";

export const fetchInvestors = async (filters: {
  location?: string;
  focusSectors?: string;
  aumRange?: string;
}) => {
  let query = supabase.from("investors").select(`
      CustomID,
      Name,
      HQLocation,
      FocusSectors,
      AUMM,
      PortfolioCompanies
    `);

  if (filters.location) {
    query = query.ilike("HQLocation", `%${filters.location}%`);
  }
  if (filters.focusSectors) {
    query = query.ilike("FocusSectors", `%${filters.focusSectors}%`);
  }
  if (filters.aumRange) {
    const [min, max] = filters.aumRange.split("-").map(Number);
    query = query.gte("AUMM", min).lte("AUMM", max);
  }
  const { data, error } = await query;

  if (error) {
    console.error("Supabase error:", error);
  }

  return data || [];
};

export const fetchPortfolioCompanies = async (customIds: string[]) => {
  const { data, error } = await supabase
    .from("companies")
    .select("CustomID, Name")
    .in("CustomID", customIds);

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return data || [];
};
