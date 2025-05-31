"use client";

import CountryFlag from "@/app/components/flag";
import { getCountry } from "@/app/utils/getCountry";
import { CompanyType } from "../types";
import { useFetchCompanies } from "../hooks/useFetchCompanies";
import { useState } from "react";
import Filters from "./filter";
import { CustomTable } from "@/app/components/customTable";
import { Spin } from "antd";
import { BriefcaseBusiness } from "lucide-react";

const companiesHeaders = [
  "Name",
  "Sector",
  "Company HQ",
  "Employees",
  "Valuation",
  "Stage",
  "Founded",
  "Primary Investor",
];

export const CompaniesList = () => {
  const [filters, setFilters] = useState<{
    stage?: string;
    location?: string;
    sector?: string;
  }>({});
  const { data, isFetching, isError } = useFetchCompanies(filters);
  const { companies = [], investorsMap = new Map() } = data || {};

  const tableData =
    companies?.map((company: CompanyType) => {
      const investor = investorsMap.get(company.PrimaryInvestorID);
      return [
        company.Name,
        company.Sector,
        <CountryFlag
          key={company.id}
          countryName={getCountry(company.HQLocation) || "Unknown"}
        />,
        <p
          key={company.Employees}
          className="border border-blue-700 rounded-2xl px-2 w-fit py-1 text-blue-700"
        >
          {company.Employees || "-"}
        </p>,
        <p key={company.id}>₦{company.Valuation || " -"}</p>,
        company.Stage,
        company.Founded,
        investor ? (
          <span className="flex items-center gap-2 py-1  bg-gray-200 w-fit rounded-[12px] px-3">
            <BriefcaseBusiness size={12} />
            {investor.Name}
          </span>
        ) : (
          "-"
        ),
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
};
