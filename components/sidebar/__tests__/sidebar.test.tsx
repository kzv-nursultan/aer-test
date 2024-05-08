import { render, screen } from "@testing-library/react";
import Sidebar from "../sidebar";
import "@testing-library/jest-dom";

describe("make sure that sidebar is rendered", () => {
  it("should render whole sidebar", async () => {
    render(<Sidebar />);
    const sidebar = await screen.findByTestId("sidebar-id");
    expect(sidebar).toBeInTheDocument();
  });
  it("should contain 'Dashboard' text", async () => {
    render(<Sidebar />);
    const text = await screen.findAllByText("Dashboard");
    expect(text[0]).toBeInTheDocument();
  });
});
