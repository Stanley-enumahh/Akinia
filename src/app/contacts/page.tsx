import { PageTitle } from "../components/pageTitle";
import { ContactsList } from "./components/contactsList";

export const metadata = {
  title: "Contacts | Akinia",
};

export default function Contacts() {
  return (
    <div className="h-full overflow-y-auto p-7 bg-[#f6f6f6] w-full flex flex-col gap-6">
      <PageTitle text="Contacts" />
      <ContactsList />
    </div>
  );
}
