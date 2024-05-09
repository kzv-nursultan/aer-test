import { render, screen } from "@testing-library/react";
import { mockTestProvider } from "@/helpers/mockProviders";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SortingFilters from "../sortingFilters";

describe("Test render output of filters", () => {
  beforeEach(() => render(mockTestProvider(<SortingFilters />)))
  it("should has select", async () => {
    const select = await screen.findByTestId("filters-select");
    expect(select).toBeInTheDocument();
  });
  it("should be able to open select", async () => {
    const select = await screen.findByTestId("filters-select");
    await userEvent.click(select);
    const option = await screen.findByText("Choose field");
    expect(option).toBeInTheDocument();
  });
  it("should contain input", async () => {
    const input = await screen.findByPlaceholderText("type here");
    expect(input).toBeInTheDocument();
    await userEvent.type(input, "text");
    expect(input).toHaveValue("text");
  })
  it("should be able to type in the input", async () => {
    const input = await screen.findByPlaceholderText("type here");
    await userEvent.type(input, "text");
    expect(input).toHaveValue("text");
  })
  it("should clear input", async () => {
    const input = await screen.findByPlaceholderText("type here");
    await userEvent.type(input, "text");
    const clearButton = await screen.findByRole("button", { name: "Clear" });
    await userEvent.click(clearButton);
    expect(input).not.toHaveValue("text");
  })
})
