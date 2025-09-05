/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("fetches and displays the user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: "ahmed", email: "ahmed@gmail.com" }),
    });
    render(<UserProfile userId={4} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /ahmed/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/ahmed@gmail.com/i)).toBeInTheDocument();
    });
  });
});
