import { ChartSection } from "../components/pie-charts/chart-section";
import { Summary } from "../components/summary/summary";
import { SymbolGroup } from "../components/symbol/symbol-group";
import { useGetPricesQuery } from "../store/apis/pricesApi";
import { useAppSelector } from "../store";

export function HomePage() {
  const { data, error, isLoading } = useGetPricesQuery();
  const symbols = useAppSelector((state) => state.db.symbols);
  const symbolGroups = [
    ...new Set(symbols.map((symbol) => symbol.group)),
  ].sort();

  console.log(data);

  return (
    <>
      <Summary />
      {symbolGroups.map((group) => {
        return <SymbolGroup key={group} symbolGroup={group} />;
      })}
      <ChartSection />
    </>
  );
}
