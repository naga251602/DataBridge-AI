import { render, screen } from "@testing-library/react";
import UploadPanel from "./UploadPanel";

test("renders upload header", () => {
  render(<UploadPanel />);
  expect(screen.getByText(/Upload CSV File/i)).toBeInTheDocument();
});
