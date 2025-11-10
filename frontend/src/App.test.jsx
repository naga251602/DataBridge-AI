import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ status: "ok" }),
    })
  )
);

test("renders Aistora Frontend Status ok", async () => {
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText(/Aistora Frontend Status: ok/i)).toBeInTheDocument()
  );
});
