import { PageTitle } from "../components/pageTitle";
import { CompaniesList } from "./components/companiesList";

export const metadata = {
  title: "Companies | Akinia",
};

export default function Companies() {
  return (
    <div className="h-full overflow-y-auto p-7 bg-[#f6f6f6] w-full flex flex-col gap-6">
      <PageTitle text="Companies" />
      <CompaniesList />
    </div>
  );
}
