import { render, screen } from "@testing-library/react";
import Header from "../header";

describe("Header", () => {
  it('should render the "Bell Button" heading', () => {
    render(<Header />);

    const button = screen.getByRole("button");
    const svg = screen.getByRole("img");

    expect(button).toContain(svg);
  });
});
