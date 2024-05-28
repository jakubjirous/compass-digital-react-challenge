import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("test", () => {
  render(<App />);
  expect(screen.getByText(/welcome to compass digital/i)).toBeInTheDocument();
});
