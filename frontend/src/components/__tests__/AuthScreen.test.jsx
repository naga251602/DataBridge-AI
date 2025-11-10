import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AuthScreen from "../AuthScreen";

describe("AuthScreen UI rendering", () => {
  it("renders Login heading", () => {
    render(<AuthScreen />);
    // Using getAllByText to allow multiple occurrences of 'Login'
    const loginTexts = screen.getAllByText(/Login/i);
    expect(loginTexts.length).toBeGreaterThan(0);
  });

  it("renders email and password input fields", () => {
    render(<AuthScreen />);
    expect(screen.getByPlaceholderText(/you@example.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/••••••••/i)).toBeInTheDocument();
  });

  it("renders both action buttons", () => {
    render(<AuthScreen />);
    expect(
      screen.getByRole("button", { name: /^login$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create one/i })
    ).toBeInTheDocument();
  });
});
