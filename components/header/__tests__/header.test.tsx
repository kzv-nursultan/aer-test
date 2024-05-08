import { render, screen } from "@testing-library/react";
import Header from "../header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it('should render the header', () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it('should render the button', () => {
    render(<Header />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
