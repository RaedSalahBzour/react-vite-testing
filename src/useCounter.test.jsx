import React from "react";
import { renderHook, screen, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { useCounter } from "./hooks/useCounter";

describe("useCounter", () => {
  it("initial value is 5", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
  it("increment", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
  it("decrement", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
