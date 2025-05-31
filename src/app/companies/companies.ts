"use client";

import { supabase } from "@/lib/supabase";

export async function fetchCompanies(filters: {
  stage?: string;
  location?: string;
  sector?: string;
}) {
  let query = supabase.from("companies").select(`*`);

  if (filters.stage) query = query.eq("Stage", filters.stage);
  if (filters.location) query = query.eq("HQLocation", filters.location);
  if (filters.sector) query = query.eq("Sector", filters.sector);

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export const fetchInvestorsByIds = async (customIds: string[]) => {
  const { data, error } = await supabase
    .from("investors")
    .select("CustomID, Name, HQLocation")
    .in("CustomID", customIds);

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return data || [];
};
