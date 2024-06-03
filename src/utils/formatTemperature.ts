/**
 * Formats a number value as degrees Fahrenheit.
 * @param value - The value to format.
 * @returns The formatted value followed by "°F".
 */
export const formatTemperature = (value: number | null): string =>
  value ? `${value}°F` : "";
