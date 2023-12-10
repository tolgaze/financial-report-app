import { Grid, useTheme } from "@mui/material";
import { DataGrid } from "devextreme-react";
import { Column, Editing } from "devextreme-react/data-grid";
import {
  addtoRealizedProfits,
  deleteFromRealizedProfits,
  updateRealizedProfits,
} from "../store/slices/dbSlice";
import { useAppDispatch, useAppSelector } from "../store";

export function RealizedProfitTable() {
  const state = useAppSelector((state) => state.db.realizedProfits);
  const dispatch = useAppDispatch();

  const onInserting = (e: any) => {
    e.cancel = true;
    dispatch(addtoRealizedProfits(e.data));
    e.component.cancelEditData();
  };

  const onRemoving = (e: any) => {
    e.cancel = true;
    dispatch(deleteFromRealizedProfits(e.data));
    e.component.cancelEditData();
  };

  const onUpdating = (e: any) => {
    e.cancel = true;
    dispatch(updateRealizedProfits([e.oldData, e.newData]));
    e.component.cancelEditData();
  };

  return (
    <Grid sx={{ p: useTheme().spacing() }}>
      <DataGrid
        dataSource={state}
        keyExpr="symbol"
        showBorders={true}
        onRowInserting={onInserting}
        onRowRemoving={onRemoving}
        onRowUpdating={onUpdating}
      >
        <Editing
          allowAdding={true}
          allowDeleting={true}
          allowUpdating={true}
          mode="row"
        />
        <Column dataField="symbol" />
        <Column dataField="profit" format="$,##0.00" />
        <Column dataField="salePrice" format="$,##0.00" />
        <Column dataField="saleAmount" />
      </DataGrid>
    </Grid>
  );
}
