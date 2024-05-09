import { render, screen, act } from "@testing-library/react";
import { mockTestProvider } from "@/helpers/mockProviders";
import "@testing-library/jest-dom";
import Table from "../table";

describe("Employees table", () => {
  beforeEach(async () => await act(() => render(mockTestProvider(<Table />))));
  it("should render table", async () => {
    const table = await screen.findByTestId("employees-table");
    expect(table).toBeInTheDocument();
  });
});
