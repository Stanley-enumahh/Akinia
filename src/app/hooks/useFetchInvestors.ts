import { useQuery } from "@tanstack/react-query";

import {
  fetchInvestors,
  fetchPortfolioCompanies,
} from "../investors/investors";

interface InvestorFilters {
  location?: string;
  focusSectors?: string;
  aumRange?: string;
}

export interface PortfolioCompanyType {
  CustomID: string;
  Name: string;
}

export const useFetchInvestors = (filters: InvestorFilters) => {
  return useQuery({
    queryKey: ["investors", filters],
    queryFn: async () => {
      const investors = await fetchInvestors(filters);
      if (investors.length === 0) return { investors, companiesMap: new Map() };

      const companyIds = [
        ...new Set(
          investors.flatMap((inv) => {
            if (!inv.PortfolioCompanies) {
              console.log(`No PortfolioCompanies for investor ${inv.CustomID}`);
              return [];
            }
            return inv.PortfolioCompanies.split(/[,;]/)
              .map((id: string) => id.trim())
              .filter((id: string) => id && id.match(/^C\d{3}$/i));
          })
        ),
      ];

      const companies = await fetchPortfolioCompanies(companyIds);

      const companiesMap = new Map<string, PortfolioCompanyType>(
        companies.map((comp) => [comp.CustomID, comp])
      );

      return { investors, companiesMap };
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    networkMode: "offlineFirst",
  });
};
