import { useQuery } from "@tanstack/react-query";
import { fetchCompanies, fetchInvestorsByIds } from "../companies";
import { InvestorType } from "@/app/investors/types";

export function useFetchCompanies(filters: {
  stage?: string;
  location?: string;
  sector?: string;
}) {
  return useQuery({
    queryKey: ["companies", filters],
    queryFn: async () => {
      const companies = await fetchCompanies(filters);
      if (companies.length === 0) return { companies, investorsMap: new Map() };

      const investorIds = [
        ...new Set(companies.map((c) => c.PrimaryInvestorID)),
      ];
      const investors = await fetchInvestorsByIds(investorIds);

      const investorsMap = new Map<string, InvestorType>(
        investors.map(
          (inv) =>
            [String(inv.CustomID), inv as InvestorType] as [
              string,
              InvestorType
            ]
        )
      );

      return { companies, investorsMap };
    },

    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    networkMode: "offlineFirst",
  });
}
