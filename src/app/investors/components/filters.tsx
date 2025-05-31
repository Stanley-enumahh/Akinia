// components/Filters.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../../components/ui/select";

interface FiltersProps {
  onFilterChange: (filters: {
    HQLocation?: string;
    focusSectors?: string;
    aumRange?: string;
  }) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [HQLocation, setHQLocation] = useState<string | undefined>(undefined);
  const [aumRange, setAumRange] = useState<string | undefined>(undefined);
  const [focusSectors, setFocusSectors] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    onFilterChange({ HQLocation, focusSectors, aumRange });
  }, [HQLocation, focusSectors, , aumRange, onFilterChange]);

  return (
    <div className="flex gap-4">
      {/* HQ HQLocation Filter */}
      <Select
        onValueChange={(value) =>
          setHQLocation(value === "all" ? undefined : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[120px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="investor HQ" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All countries</SelectItem>
          <SelectItem value="Lagos, Nigeria">Nigeria</SelectItem>
          <SelectItem value="Nairobi, Kenya">Kenya</SelectItem>
          <SelectItem value="Rwanda">Rwanda</SelectItem>
          <SelectItem value="Dakar, Senegal">Senegal</SelectItem>
          <SelectItem value="Cape Town, South Africa">South Africa</SelectItem>
          <SelectItem value="Kigali, Rwanda">Rwanda</SelectItem>
        </SelectContent>
      </Select>

      {/* Sector Filter */}
      <Select
        onValueChange={(value) =>
          setFocusSectors(value === "all" ? undefined : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[120px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="Focus Sectors" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All sectors</SelectItem>
          <SelectItem value="Fintech">fintech</SelectItem>
          <SelectItem value="CleanTech">clean tech</SelectItem>
          <SelectItem value="EDTech">education tech</SelectItem>
          <SelectItem value="AGTech">agro tech</SelectItem>
          <SelectItem value="HealthTech">health tech</SelectItem>
          <SelectItem value="Logistics">logistics</SelectItem>
          <SelectItem value="E-commerce">e-commerce</SelectItem>
          <SelectItem value="Gaming">gaming</SelectItem>
        </SelectContent>
      </Select>

      {/* AUM */}
      <Select
        onValueChange={(value) =>
          setAumRange(value === "all" ? undefined : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[120px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="Aum range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ranges</SelectItem>
          <SelectItem value="0-100">0-100M</SelectItem>
          <SelectItem value="101-200">101-200M</SelectItem>
          <SelectItem value="201-300">201-300M</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
