import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import React from "react";
import { CHART_HEIGHT, CHART_LABEL, CHART_WIDTH } from "../../conts";
import { useChartData } from "../../hooks/useChartData";
import { useTemperatures } from "../../hooks/useTemperatures";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

const chartSetting = {
  yAxis: [
    {
      label: CHART_LABEL,
    },
  ],
  width: CHART_WIDTH,
  height: CHART_HEIGHT,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-0.5rem, 0)",
    },
  },
};

export default function TemperatureChart() {
  const { data, isLoading, isError, error, refetch } = useTemperatures();

  const { dateKey, series } = useChartData(data);

  const handleRetry = () => {
    refetch();
  };

  return (
    <Box maxWidth={CHART_WIDTH}>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage message={error.message} onRetry={handleRetry} />
      ) : (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: "band", dataKey: dateKey }]}
          series={series}
          {...chartSetting}
        />
      )}
    </Box>
  );
}
