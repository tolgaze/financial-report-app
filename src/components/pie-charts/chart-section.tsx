import { Grid } from "@mui/material";
import { useAppSelector } from "../../store";
import { AssetDistChart } from "./asset-dist-chart";

export function ChartSection() {
  const state = useAppSelector((state) => state.db.symbols);

  return (
    <Grid container justifyContent="space-between" marginTop={2}>
      <AssetDistChart dataSource={state} title="DETAILED" />
      <AssetDistChart dataSource={state} title="GENERAL" />
      <AssetDistChart dataSource={state} title="CRYPTO" />
    </Grid>
  );
}
