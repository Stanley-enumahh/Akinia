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

  return (data ?? []).map((item) => ({
    id: String(item.id),
    name: String(item.name),
    role: String(item.role),
    company_id: String(item.company_id),
    investor_id: String(item.investor_id),
    email: String(item.email),
    companies: {
      Name: String(item.companies?.[0]?.Name ?? ""),
    },
  })) as ContactWithCompany[];
};
