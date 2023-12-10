import { Grid, Paper, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { SymbolType } from "../../store/data.type";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

type Props = {
  symbol: SymbolType;
};

export function Smybol(props: Props) {
  const getSubText = () => {
    if (props.symbol.id === "USD") {
      return (
        <div className="SymbolSubText">Holding: {props.symbol.holding}</div>
      );
    }
    return (
      <div className="SymbolSubText">
        Holding: {props.symbol.holding} | Avg Price:{" "}
        {props.symbol.avgPrice.toLocaleString("us-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    );
  };

  return (
    <Paper sx={{ mb: useTheme().spacing() }}>
      <Link
        style={{ textDecoration: "none", color: "royalblue" }}
        to={"/realizedProfit"}
      >
        <Grid
          container
          alignItems={"center"}
          sx={{
            p: useTheme().spacing(),
            backgroundColor: "white",
          }}
        >
          <Grid item xs={6}>
            <b className="SymbolName">{props.symbol.id}</b>
          </Grid>
          <Grid color={"black"} item xs={5.5} textAlign="end">
            <b>
              {props.symbol.currentValueUsd.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </b>
          </Grid>
          <Grid item xs={0.5} textAlign="end">
            <ArrowForwardIosIcon />
          </Grid>
          <Grid item xs={6} className="SymbolSubText">
            {getSubText()}
          </Grid>
          <Grid
            item
            xs={5.6}
            textAlign="end"
            color={props.symbol.plUsd >= 0 ? "green" : "red"}
            fontSize={"9pt"}
          >
            <b>
              {props.symbol.plUsd >= 0 ? "+" : ""}
              {props.symbol.plUsd.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {" ("}
              {props.symbol.plPercent.toLocaleString("us-US", {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {") "}
            </b>
            {props.symbol.plUsd >= 0 ? (
              <NorthIcon color="success" sx={{ fontSize: 12 }} />
            ) : (
              <SouthIcon color="error" sx={{ fontSize: 12 }} />
            )}
          </Grid>
        </Grid>
      </Link>
    </Paper>
  );
}
