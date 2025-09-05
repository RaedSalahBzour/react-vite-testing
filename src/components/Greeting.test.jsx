import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("render default greeting", () => {
    render(<Greeting />);
    expect(screen.queryByText("Hello, World!")).toBeInTheDocument();
  });

  it("render greeting with a name", () => {
    render(<Greeting name={"Raed"} />);
    const text = screen.getByText("Hello, Raed!");
    expect(text).toBeInTheDocument();
  });
});
