import { cityTemperature } from "@visx/mock-data";

export interface CityTemperature {
  [key: string]: string | number;
}

export async function getTemperatures({ limit = 10 }: { limit?: number }) {
  try {
    const response = new Response(
      JSON.stringify(
        cityTemperature
          .map((o) => {
            let temperature: CityTemperature = {};
            Object.keys(o).forEach((key) => {
              if (key === "date") {
                temperature[key] = o[key];
              } else {
                temperature[key] = Number(
                  (o as unknown as Record<string, string>)[key],
                );
              }
            });
            return temperature;
          })
          .slice(0, limit),
      ),
    );
    return new Promise((resolve) => setTimeout(resolve, 1000, response.json()));
  } catch (error) {
    console.error("Failed to fetch temperatures", error);
    throw new Error("Failed to fetch temperatures");
  }
}
