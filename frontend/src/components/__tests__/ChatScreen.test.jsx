import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ChatScreen from "../ChatScreen";

describe("ChatScreen UI (static mockup)", () => {
  it("renders chat container and header", () => {
    render(<ChatScreen />);
    // Match the actual header text in your DOM
    expect(screen.getByText(/ai database chat/i)).toBeInTheDocument();
    expect(
      screen.getByText(/user → right • ai → left • schema sidebar available/i)
    ).toBeInTheDocument();
  });

  it("renders at least one user message and one AI message", () => {
    render(<ChatScreen />);
    // Ensure both messages exist (from static examples)
    expect(screen.getByText(/show total students count/i)).toBeInTheDocument();
    expect(screen.getByText(/the table/i)).toBeInTheDocument();
  });

  it("renders input box for message typing", () => {
    render(<ChatScreen />);
    // Match your placeholder exactly
    expect(
      screen.getByPlaceholderText(/ask your database/i)
    ).toBeInTheDocument();
  });

  it("renders a send button or icon", () => {
    render(<ChatScreen />);
    // Match "Send" button
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
});
