export type DbType = SummaryType & { symbols: SymbolType[] } & {
  realizedProfits: RealizedProfitType[];
};

export type SummaryType = {
  totalInvestment: number;
  currentValue: number;
  profitLossPercent: number;
  initialInvestment: number;
  realizedProfit: number;
};

export type RealizedProfitType = {
  symbolId: string;
  profit: number;
  salePrice: number;
  saleAmount: number;
};

export type SymbolType = {
  id: string;
  group: string;
  price: number;
  holding: number;
  avgPrice: number;
  investmentUsd: number;
  plUsd: number;
  plPercent: number;
  currentValueUsd: number;
  color: string;
  precision: number;
  purchases?: PurchaseType[];
  sales?: SaleType[];
};

export type PurchaseType = {
  price: number;
  amount: number;
  date: Date;
};

export type SaleType = {
  price: number;
  amount: number;
  date: Date;
  profit: number;
};

export type ApiGoldResponseType = {
  symbolId: string;
  price: number;
}[];

export type ApiCurrrencyResponseType = {
  symbolId: string;
  price: number;
}[];

export type ApiFundResponseType = {
  symbolId: string;
  price: number;
}[];
