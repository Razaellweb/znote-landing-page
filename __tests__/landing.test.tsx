// __tests__/landing.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "../pages/landing";

describe("Landing Page", () => {
  it("renders hero section with correct headline and CTA", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /the smart way/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /get started/i })[0]).toBeInTheDocument();
  });

  it("renders features section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /features that keep you organized/i })).toBeInTheDocument();
  });

  it("renders social proof section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /trusted by students/i })).toBeInTheDocument();
  });

  it("renders FAQ section", () => {
    render(<Landing />);
    expect(screen.getByRole("heading", { name: /frequently asked questions/i })).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<Landing />);
    expect(screen.getAllByRole("button", { name: /get started/i })[1]).toBeInTheDocument();
  });
});
