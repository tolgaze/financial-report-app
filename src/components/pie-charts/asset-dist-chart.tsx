import { Paper, useTheme } from "@mui/material";
import PieChart, {
  Connector,
  Label,
  Legend,
  Series,
  Size,
  Font,
  Title,
} from "devextreme-react/pie-chart";

type Props = {
  dataSource: {}[];
  title: string;
};

export function AssetDistChart(props: Props) {
  return (
    <Paper elevation={3} sx={{ mb: useTheme().spacing() }}>
      <PieChart
        id="pie"
        dataSource={props.dataSource}
        resolveLabelOverlapping={"shift"}
        customizePoint={(item) => ({ color: item.tag })}
      >
        <Title text={props.title}>
          <Font family={"inherit"} size={16} color={"grey"} weight={"bold"} />
        </Title>
        <Series
          tagField="color"
          argumentField="id"
          valueField="currentValueUsd"
        >
          <Label
            visible={true}
            format={{ percentPrecision: 1 }}
            customizeText={formatText}
          >
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Legend visible={false} />
        <Size height={340} width={410} />
      </PieChart>
    </Paper>
  );
}

function formatText(arg: any) {
  return `${arg.argumentText} (${arg.percentText})`;
}
