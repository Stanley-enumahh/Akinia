import { PageTitle } from "../components/pageTitle";

export const metadata = {
  title: "Funds | Akinia",
};

export default function Funds() {
  return (
    <div className="h-full overflow-y-auto p-7 bg-[#f6f6f6] w-full flex flex-col gap-6">
      <PageTitle text="Funds" />
    </div>
  );
}
