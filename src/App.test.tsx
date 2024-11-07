import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Click Me button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
