export interface ContactType {
  id: string;
  name: string;
  role: string;
  company_id: string | null;
  investor_id: string | null;
  email: string;
}

export interface ContactWithCompany {
  id: string;
  name: string;
  role: string;
  company_id: string;
  investor_id: string;
  email: string;
  companies: {
    Name: string;
  };
}
