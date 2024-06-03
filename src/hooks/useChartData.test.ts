import { renderHook } from "@testing-library/react";
import { useChartData } from "./useChartData";
import { Temperatures } from "./useTemperatures";

const mockTemperatures: Temperatures = [
  { date: "2024-06-01", "New York": 25, "San Francisco": 20, Austin: 30 },
  { date: "2024-06-02", "New York": 28, "San Francisco": 22, Austin: 32 },
];

describe("useChartData", () => {
  test("should returns default values when no data provided", () => {
    const { result } = renderHook(() => useChartData());

    expect(result.current.dateKey).toBe("date");
    expect(result.current.series).toEqual([]);
  });

  test("should returns date key and series when data is provided", () => {
    const { result } = renderHook(() => useChartData(mockTemperatures));

    expect(result.current.dateKey).toBe("date");

    expect(result.current.series).toHaveLength(3);

    expect(result.current.series[0]).toEqual({
      dataKey: "Austin",
      label: "Austin",
      valueFormatter: expect.any(Function),
    });

    expect(result.current.series[1]).toEqual({
      dataKey: "New York",
      label: "New York",
      valueFormatter: expect.any(Function),
    });

    expect(result.current.series[2]).toEqual({
      dataKey: "San Francisco",
      label: "San Francisco",
      valueFormatter: expect.any(Function),
    });
  });
});
