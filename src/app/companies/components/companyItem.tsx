import React from "react";
import { CompanyType } from "../types";
import CountryFlag from "@/app/components/flag";

export const CompanyItem = ({ company }: { company: CompanyType }) => {
  return (
    <li key={company.id} className="h-fit flex flex-row gap-3">
      <p>{company.Name}</p>
      <p>{company.Employees}</p>
      <CountryFlag countryName={company.HQLocation} />
    </li>
  );
};
