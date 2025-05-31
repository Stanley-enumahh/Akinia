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
    stage?: string;
    location?: string;
    sector?: string;
  }) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [stage, setStage] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [sector, setSector] = useState<string | undefined>(undefined);

  useEffect(() => {
    onFilterChange({ stage, location, sector });
  }, [stage, location, sector, onFilterChange]);

  return (
    <div className="flex gap-4">
      <Select
        onValueChange={(value) => setStage(value === "all" ? undefined : value)}
        defaultValue="all"
      >
        <SelectTrigger className="w-[160px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="Select Stage" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Stages</SelectItem>
          <SelectItem value="Growth">Growth</SelectItem>
          <SelectItem value="Series A">Series A</SelectItem>
          <SelectItem value="Series B">Series B</SelectItem>
          <SelectItem value="Series C">Series C</SelectItem>
          <SelectItem value="Series D">Series D</SelectItem>
        </SelectContent>
      </Select>

      {/* HQ Location Filter */}
      <Select
        onValueChange={(value) =>
          setLocation(value === "all" ? undefined : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[120px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="company HQ" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Locations</SelectItem>
          <SelectItem value="Nigeria">Nigeria</SelectItem>
          <SelectItem value="Kenya">Kenya</SelectItem>
          <SelectItem value="Rwanda">Rwanda</SelectItem>
          <SelectItem value="Senegal">Senegal</SelectItem>
          <SelectItem value="South Africa">South Africa</SelectItem>
          <SelectItem value="Uganda">Uganda</SelectItem>
        </SelectContent>
      </Select>

      {/* Sector Filter */}
      <Select
        onValueChange={(value) =>
          setSector(value === "all" ? undefined : value)
        }
        defaultValue="all"
      >
        <SelectTrigger className="w-[120px] bg-gray-200 text-blue-700 text-sm h-[30px] rounded-2xl py-2">
          <SelectValue placeholder="Select Sector" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sectors</SelectItem>
          <SelectItem value="Fintech">fintech</SelectItem>
          <SelectItem value="CleanTech">clean tech</SelectItem>
          <SelectItem value="HealthTech">health tech</SelectItem>
          <SelectItem value="EDTech">education tech</SelectItem>
          <SelectItem value="AGTech">agro tech</SelectItem>
          <SelectItem value="HealthTech">health tech</SelectItem>
          <SelectItem value="Logistics">logistics</SelectItem>
          <SelectItem value="E-commerce">e-commerce</SelectItem>
          <SelectItem value="Gaming">gaming</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
