import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React, { ComponentProps } from "react";
import { describe, test, vitest } from "vitest";
import ErrorMessage from "./ErrorMessage";

type Props = ComponentProps<typeof ErrorMessage>;

const defaultProps: Props = {
  message: "Default error message",
  onRetry: vitest.fn(),
};

describe("<ErrorMessage />", () => {
  function renderErrorMessage(props?: Partial<Props>) {
    return render(<ErrorMessage {...defaultProps} {...props} />);
  }

  test("should renders error message and retry button", () => {
    const message = "Network error";
    renderErrorMessage({ message });

    const alertTitleElement = screen.getByText(/Oops! Something went wrong:/i);
    const messageElement = screen.getByText(message);
    const retryButtonElement = screen.getByRole("button", { name: /retry/i });

    expect(alertTitleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(retryButtonElement).toBeInTheDocument();
  });

  test("should calls onRetry function when retry button is clicked", () => {
    const retryMock = vitest.fn();
    renderErrorMessage({ onRetry: retryMock });

    const retryButtonElement = screen.getByRole("button", { name: /retry/i });
    fireEvent.click(retryButtonElement);

    expect(retryMock).toHaveBeenCalled();
  });
});
