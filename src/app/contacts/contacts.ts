import { supabase } from "@/lib/supabase";
import { ContactWithCompany } from "./types";

export const fetchContacts = async (): Promise<ContactWithCompany[]> => {
  const { data, error } = await supabase
    .from("contacts")
    .select(
      `
      id,
      name,
      role,
      company_id,
      investor_id,
      email,
      companies!fk_company_id(Name)
    `
    )
    .eq("role", "CEO");

  if (error) {
    throw new Error(error.message);
  }

  return data as ContactWithCompany[];
};
