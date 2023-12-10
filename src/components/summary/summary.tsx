import { Grid, Paper, useTheme } from "@mui/material";
import { useAppSelector } from "../../store";
import {
  AccountBalance,
  Balance,
  MonetizationOn,
  Savings,
} from "@mui/icons-material";

export function Summary() {
  const summary = useAppSelector((state) => state.db);

  return (
    <Paper elevation={3} sx={{ marginBottom: 2 }}>
      <Grid
        container
        sx={{
          p: useTheme().spacing(),
          backgroundColor: "white",
        }}
      >
        <Grid item xs={2} textAlign={"end"}>
          <AccountBalance fontSize="large" color="action" />
        </Grid>
        <Grid item xs={4}>
          <b className="SummaryValue">
            {summary.currentValue.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </b>
          <br></br>
          <b className="SummarySubText">Current Value</b>
        </Grid>
        <Grid item xs={1.5} textAlign={"end"}>
          <Savings fontSize="large" color="primary" />
        </Grid>
        <Grid item xs={4.5}>
          <b className="SummaryValue">
            {summary.totalInvestment.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </b>
          <br></br>
          <b className="SummarySubText">Invested Value</b>
        </Grid>
        <Grid item xs={2} marginTop={2} textAlign={"end"}>
          <MonetizationOn fontSize="large" color="success" />
        </Grid>
        <Grid item xs={4} marginTop={2}>
          <b
            className="SummaryValue"
            style={{ color: summary.profitLossPercent >= 0 ? "green" : "red" }}
          >
            {(summary.currentValue - summary.totalInvestment).toLocaleString(
              "us-US",
              {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}
          </b>
          <br></br>
          <b className="SummarySubText">Earnings</b>
        </Grid>
        <Grid item xs={1.5} marginTop={2} textAlign={"end"}>
          <Balance fontSize="large" color="warning" />
        </Grid>
        <Grid item xs={4.5} marginTop={2}>
          <b
            className="SummaryValue"
            style={{ color: summary.profitLossPercent >= 0 ? "green" : "red" }}
          >
            {summary.profitLossPercent.toLocaleString("us-US", {
              style: "percent",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </b>
          <br></br>
          <b className="SummarySubText">Absolute Returns</b>
        </Grid>
      </Grid>
    </Paper>
  );
}
