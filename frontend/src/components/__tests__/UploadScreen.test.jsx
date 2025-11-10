import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UploadScreen from "../UploadScreen";

describe("UploadScreen UI (static mockup)", () => {
  it("renders the main heading and logout button", () => {
    render(<UploadScreen />);
    expect(screen.getByText(/csv database uploader/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  it("renders the database input section", () => {
    render(<UploadScreen />);
    // Just check text, not label association
    expect(screen.getByText(/database name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/student_analytics_db/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /this logical database will contain tables created from your csv files/i
      )
    ).toBeInTheDocument();
  });

  it("renders the upload CSV section", () => {
    render(<UploadScreen />);
    expect(screen.getByText(/upload csv files/i)).toBeInTheDocument();
    // The label exists with `for="file-upload"`, so query by that attribute
    const uploadLabel = document.querySelector('label[for="file-upload"]');
    expect(uploadLabel).toBeTruthy();
  });

  it("renders mock action buttons for mapping and chat", () => {
    render(<UploadScreen />);
    expect(
      screen.getByRole("button", { name: /detect relationships/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /save mapping and open ai chat/i })
    ).toBeInTheDocument();
  });
});
