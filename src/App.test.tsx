import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Reminder item", () => {
  render(<App />);
  const reminderElement = screen.getByText(/reminder/i);
  expect(reminderElement).toBeInTheDocument();
});
