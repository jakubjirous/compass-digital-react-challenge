import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { getTemperatures } from "../api";

const temperatureSchema = z.object({
  date: z.string(),
  "New York": z.number(),
  "San Francisco": z.number(),
  Austin: z.number(),
});

const temperaturesSchema = z.array(temperatureSchema);

export type Temperatures = z.infer<typeof temperaturesSchema>;

export function useTemperatures(limit: number = 10) {
  return useQuery({
    queryKey: ["temperatures", limit],
    queryFn: () =>
      getTemperatures({ limit }).then((data) => temperaturesSchema.parse(data)),
  });
}
