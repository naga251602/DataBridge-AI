import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UploadScreen from "../UploadScreen";

describe("UploadScreen UI rendering", () => {
  it("renders upload title and description", () => {
    render(<UploadScreen />);
    expect(screen.getByText(/upload your csv files/i)).toBeInTheDocument();
    expect(screen.getByText(/each file will be stored/i)).toBeInTheDocument();
  });

  it("renders database name input", () => {
    render(<UploadScreen />);
    expect(
      screen.getByPlaceholderText(/enter database name/i)
    ).toBeInTheDocument();
  });

  it("renders file input and upload button", () => {
    render(<UploadScreen />);
    expect(screen.getByLabelText(/choose files/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /upload/i })).toBeInTheDocument();
  });

  it("renders workspace navigation button", () => {
    render(<UploadScreen />);
    expect(
      screen.getByRole("button", { name: /go to chat workspace/i })
    ).toBeInTheDocument();
  });
});
