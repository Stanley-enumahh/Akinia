import React from "react";

const countryFlagMap: Record<string, string> = {
  Nigeria: "🇳🇬",
  USA: "🇺🇸",
  Rwanda: "RW",
  "South Africa": "🇿🇦",
  Kenya: "🇰🇪",
  Senegal: "🇸🇳",
  Unknown: "🌐",
};

interface CountryFlagProps {
  countryName: string;
}

export default function CountryFlag({ countryName }: CountryFlagProps) {
  const normalizedCountry = countryName.toLowerCase().replace(/\s+/g, "");
  const flag = Object.keys(countryFlagMap).find(
    (key) => key.toLowerCase().replace(/\s+/g, "") === normalizedCountry
  );
  return <span>{flag ? countryFlagMap[flag] : "🌐"}</span>;
}
