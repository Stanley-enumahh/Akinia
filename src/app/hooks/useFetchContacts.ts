import { useQuery } from "@tanstack/react-query";
import { ContactWithCompany } from "../contacts/types";
import { fetchContacts } from "../contacts/contacts";

export const useFetchContacts = () => {
  return useQuery<ContactWithCompany[], Error>({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    networkMode: "offlineFirst",
  });
};
