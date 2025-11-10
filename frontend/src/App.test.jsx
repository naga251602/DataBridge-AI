import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Aistora text", () => {
  render(<App />);
  expect(screen.getByText(/Aistora Frontend Active/i)).toBeInTheDocument();
});
