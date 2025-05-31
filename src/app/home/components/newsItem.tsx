import { ArrowRightLeft, Building } from "lucide-react";
import { NewsItemWithCompany } from "../types";

interface NewsItemProps {
  news: NewsItemWithCompany;
}

export const NewsItem = ({ news }: NewsItemProps) => {
  const companyNames =
    news.companies.length > 0
      ? news.companies.map((company) => company.name).join(" x ")
      : "-";

  return (
    <div className="border-gray-300 py-5 flex flex-col gap-4 border-b bg-white">
      <h3 className="text-sm font-semibold text-[#031D3D]">{news.title}</h3>
      <div className="flex flex-row gap-4 items-center">
        <span className="flex text-gray-600 flex-row gap-2 font-semibold py-1 text-xs px-2 rounded-2xl bg-gray-200 items-center">
          <Building size={10} />
          <p>{news.sector}</p>
        </span>
        {companyNames && (
          <span className="flex flex-row gap-2 text-blue-600 font-semibold py-1 text-xs px-2 rounded-2xl bg-blue-100 items-center">
            <ArrowRightLeft size={10} />

            <p>{companyNames}</p>
          </span>
        )}
        {
          news.sector &&
        <p className=" text-gray-600 gap-2 font-semibold py-1 text-xs px-2 rounded-2xl bg-gray-200 items-center">
          {news.sector}
        </p>
        }
      </div>
    </div>
  );
};
