export interface NewsType {
  id: string;
  title: string;
  date: string | null;
  sector: string | null;
  related_company: string | null;
  related_fund_id: string | null;
  source: string | null;
  companies: { name: string }[];
}

export interface Company {
  CustomID: string;
  name: string;
}

export interface RawNewsItemWithCompany {
  id: string;
  title: string;
  date: string | null;
  sector: string | null;
  related_company: string | null;
  related_fund_id: string | null;
  source: string | null;
  company_names: string[] | null;
}

export interface NewsItemWithCompany {
  id: string;
  title: string;
  date: string | null;
  sector: string | null;
  related_company: string | null;
  related_fund_id: string | null;
  source: string | null;
  companies: { name: string }[];
}
