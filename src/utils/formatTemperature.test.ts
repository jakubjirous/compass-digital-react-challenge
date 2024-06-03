import { formatTemperature } from "./formatTemperature";

describe("formatTemperature", () => {
  test("should format temperature correctly when value is not null", () => {
    const temperature = 25;
    const formattedTemperature = formatTemperature(temperature);
    expect(formattedTemperature).toBe("25°F");
  });

  test("should return an empty string when value is null", () => {
    const temperature = null;
    const formattedTemperature = formatTemperature(temperature);
    expect(formattedTemperature).toBe("");
  });
});
