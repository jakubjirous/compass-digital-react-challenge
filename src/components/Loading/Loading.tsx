import { Skeleton } from "@mui/material";
import React from "react";
import { CHART_HEIGHT, CHART_WIDTH } from "../../conts";

export default function Loading() {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      data-testid="loading"
    />
  );
}
