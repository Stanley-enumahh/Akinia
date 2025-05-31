export type InvestorType = {
  id: string;
  Name: string;
  HQLocation: string;
  FocusSectors: string[];
  Founded: number;
  ManagingPartnerID: string;
  AUMM?: number;
  PortfolioCompanies: string[];
  CustomID?: string;
};
