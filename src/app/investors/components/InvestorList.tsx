"use client";

import { useFetchInvestors } from "@/app/hooks/useFetchInvestors";
import Filters from "./filters";
import { useState } from "react";
import { Spin } from "antd";
import { CustomTable } from "@/app/components/customTable";
import CountryFlag from "@/app/components/flag";
import { getCountry } from "@/app/utils/getCountry";

const companiesHeaders = [
  "Name",
  "Focus sector",
  "Investor HQ",
  "Companies",
  "Portfolio companies",
];

export default function InvestorsList() {
  const [filters, setFilters] = useState<{
    location?: string;
    focusSectors?: string;
  }>({});
  const { data, isFetching, isError } = useFetchInvestors(filters);
  const { investors = [], companiesMap = new Map() } = data || {};

  const tableData =
    investors?.map((investor) => {
      const portfolioIds = investor.PortfolioCompanies
        ? investor.PortfolioCompanies.split(/[,;]/)
            .map((id: string) => id.trim())
            .filter((id: string) => id && id.match(/^C\d{3}$/i))
        : [];
      const portfolioNames =
        portfolioIds
          .map((id: string) => {
            const name = companiesMap.get(id)?.Name;
            return name;
          })
          .filter((name: string) => !!name)
          .join(", ") || "-";

      return [
        investor.Name,
        investor.FocusSectors,
        <CountryFlag
          key={investor.CustomID}
          countryName={getCountry(investor.HQLocation) || "-"}
        />,
        <p
          key={investor.CustomID}
          className="border border-blue-700 rounded-2xl px-2 w-fit py-1 text-blue-700"
        >
          {investor.AUMM ? investor.AUMM : "-"}
        </p>,
        portfolioNames,
      ];
    }) || [];

  return (
    <ul className="flex flex-col gap-4">
      <Filters onFilterChange={setFilters} />
      {isFetching ? (
        <span className="h-[400px] w-full flex items-center justify-center">
          <Spin />
        </span>
      ) : isError ? (
        <span className="h-[400px] text-gray-500 font-semibold w-full flex items-center justify-center">
          <p>Loading failed due to poor network</p>
        </span>
      ) : (
        <CustomTable headers={companiesHeaders} rows={tableData} />
      )}
    </ul>
  );
}
