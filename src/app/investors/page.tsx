import { PageTitle } from "../components/pageTitle";
import InvestorsList from "./components/InvestorList";

export const metadata = {
  title: "Akinia | Investors",
};

export default function Investors() {
  return (
    <div className="h-full overflow-y-auto p-7 bg-[#f6f6f6] w-full flex flex-col gap-6">
      <PageTitle text="Investors" />
      <InvestorsList />
    </div>
  );
}
