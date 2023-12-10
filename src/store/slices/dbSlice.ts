import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { testData } from "../../data";
import { RealizedProfitType } from "../data.type";

export const dbSlice = createSlice({
  name: "db",
  initialState: testData,
  reducers: {
    updateUsdHolding: (state, action: PayloadAction<number>) => {
      const usdIndex = state.symbols.findIndex((symbol) => symbol.id === "USD");

      state.symbols[usdIndex].holding = action.payload;
      state.symbols[usdIndex].currentValueUsd = action.payload;
      state.symbols[usdIndex].investmentUsd = action.payload;
      dbSlice.caseReducers.updateSummary(state);
    },
    updateSummary: (state) => {
      state.totalInvestment = state.symbols.reduce(
        (sum, symbol) => sum + symbol.investmentUsd,
        0
      );
      state.currentValue = state.symbols.reduce(
        (sum, symbol) => sum + symbol.currentValueUsd,
        0
      );

      const usdIndex = state.symbols.findIndex((symbol) => symbol.id === "USD");
      const currentValueWithoutUsd =
        state.currentValue - state.symbols[usdIndex].currentValueUsd;
      const totalInvestmentWithoutUsd =
        state.totalInvestment - state.symbols[usdIndex].investmentUsd;

      state.profitLossPercent =
        currentValueWithoutUsd / totalInvestmentWithoutUsd - 1;
      state.initialInvestment = state.totalInvestment - state.realizedProfit;
    },
    updateRealizedProfit: (state) => {
      state.realizedProfit = state.realizedProfits.reduce(
        (sum, item) => sum + item.profit,
        0
      );
      dbSlice.caseReducers.updateSummary(state);
    },
    addtoRealizedProfits: (
      state,
      action: PayloadAction<RealizedProfitType>
    ) => {
      state.realizedProfits.push(action.payload);
      dbSlice.caseReducers.updateRealizedProfit(state);
    },
    updateRealizedProfits: (
      state,
      action: PayloadAction<RealizedProfitType[]>
    ) => {
      console.log(action.payload[0]);
      console.log(action.payload[1]);
      console.log(state.realizedProfits);
      const oldItem = action.payload[0];
      const updatedProps = action.payload[1];
      const itemIndex = state.realizedProfits.findIndex(
        (item) =>
          item.symbolId === oldItem.symbolId && item.profit === oldItem.profit
      );
      state.realizedProfits[itemIndex] = {
        ...state.realizedProfits[itemIndex],
        ...updatedProps,
      };
      dbSlice.caseReducers.updateRealizedProfit(state);
    },
    deleteFromRealizedProfits: (
      state,
      action: PayloadAction<RealizedProfitType>
    ) => {
      const itemIndex = state.realizedProfits.findIndex(
        (item) =>
          item.symbolId === action.payload.symbolId &&
          item.profit === action.payload.profit
      );
      state.realizedProfits.splice(itemIndex, 1);
      dbSlice.caseReducers.updateRealizedProfit(state);
    },
  },
});

export default dbSlice.reducer;

// Action creators are generated for each case reducer function
export const {
  updateSummary,
  updateUsdHolding,
  updateRealizedProfit,
  addtoRealizedProfits,
  updateRealizedProfits,
  deleteFromRealizedProfits,
} = dbSlice.actions;
