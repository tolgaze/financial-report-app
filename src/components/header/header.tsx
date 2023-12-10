import { Grid } from "@mui/material";

export function Header() {
  return (
    <Grid
      item
      xs={12}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      height={75}
      color={"white"}
      bgcolor={"royalblue"}
    >
      <b className="AppHeader">APE INVESTOR</b>
    </Grid>
  );
}
