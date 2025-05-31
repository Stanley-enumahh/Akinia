import { PageTitle } from "../components/pageTitle";
import { NewsList } from "./components/newsList";

export const metadata = {
  title: "Home | Akinia",
};

export default function Home() {
  return (
    <div className="h-full overflow-y-auto p-7 justify-start bg-white w-full flex">
      <div className="w-[63%] ml-[100px] flex flex-col gap-8">
        <span className="flex space-y-1 flex-col ">
          <PageTitle text="Good afternoon, Jean Alexandre" />

          <p className="text-xs text-gray-500 font-medium">
            News limited to south and west Africa
          </p>
        </span>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-xs w-full font-bold text-[#031D3D] border-b border-gray-300 pb-3">
            This week
          </p>
          <NewsList />
        </div>
      </div>
    </div>
  );
}
