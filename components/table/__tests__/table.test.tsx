import { render, screen } from "@testing-library/react";
import { mockTestProvider } from "@/helpers/mockProviders";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Table from "../table";

describe("Employees table", () => {
  beforeEach(() => render(mockTestProvider(<Table />)));
  it("should render table", async () => {
    const table = await screen.findByTestId("employees-table");
    expect(table).toBeInTheDocument();
  });
});
