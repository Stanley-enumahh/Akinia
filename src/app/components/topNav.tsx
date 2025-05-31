import { Search } from "lucide-react";

export const Topbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-sm z-20 flex h-fit justify-between items-center flex-row py-2 px-5">
      <h1 className="font-semibold text-lg text-[]">Akinia.</h1>

      <div className="w-[45%] px-4 h-[30px] bg-[#ebebeb] rounded-[8px] flex flex-row gap-2 items-center">
        <span className="space-x-3 flex items-center flex-row">
          <Search className="text-xs text-gray-600" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="w-[350px] outline-none text-sm text-gray-600 border-none placeholder:text-sm"
          />
        </span>
      </div>

      <h3 className="text-sm capitalize font-semibold">Jean gray</h3>
    </div>
  );
};
