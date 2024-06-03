import { Container } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getTemperatures } from "../../api";
import TemperatureChart from "../TemperatureChart/TemperatureChart";

export default function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchData = async () => {
      await queryClient.prefetchQuery({
        queryKey: ["temperatures"],
        queryFn: () => getTemperatures({ limit: 10 }),
      });
    };

    prefetchData();
  }, [queryClient]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <TemperatureChart />
    </Container>
  );
}
