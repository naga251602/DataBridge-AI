import { render, screen } from "@testing-library/react";
import ChatPanel from "./ChatPanel";

test("renders chat input", () => {
  render(<ChatPanel />);
  expect(screen.getByPlaceholderText(/Ask Aistora/i)).toBeInTheDocument();
});
