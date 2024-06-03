import { useMemo } from "react";
import { formatTemperature } from "../components/utils/formatTemperature";
import { Temperatures } from "./useTemperatures";

export function useChartData(data?: Temperatures) {
  return useMemo(() => {
    if (!data || data.length === 0) return { dateKey: "date", series: [] };

    const keys = Object.keys(data[0]);

    const dateKey =
      keys.find((key) => key.toLowerCase().includes("date")) || "date";

    const dataKeys = keys.filter((key) => key !== dateKey).sort();

    const series = dataKeys.map((key) => ({
      dataKey: key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      valueFormatter: formatTemperature,
    }));

    return { dateKey, series };
  }, [data]);
}
