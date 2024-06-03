import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { describe, test } from "vitest";
import { CHART_HEIGHT, CHART_WIDTH } from "../../conts";
import Loading from "./Loading";

describe("<Loading />", () => {
  test("should renders a skeleton component with proper size", () => {
    render(<Loading />);

    const skeletonElement = screen.getByTestId("loading");

    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyle({ height: `${CHART_HEIGHT}px` });
    expect(skeletonElement).toHaveStyle({ width: `${CHART_WIDTH}px` });
  });
});
