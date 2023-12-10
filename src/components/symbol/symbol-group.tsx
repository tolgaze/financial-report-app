import { useAppSelector } from "../../store";
import { Smybol } from "./symbol";

type Props = {
  symbolGroup: string;
};

export function SymbolGroup(props: Props) {
  const symbolList = useAppSelector((state) => state.db.symbols)
    .filter((symbol) => symbol.group === props.symbolGroup)
    .sort((a, b) => b.currentValueUsd - a.currentValueUsd);

  return (
    <>
      <div className="SymbolListTitle">{props.symbolGroup}</div>
      {symbolList.map((symbol) => {
        return <Smybol key={symbol.id} symbol={symbol} />;
      })}
    </>
  );
}
