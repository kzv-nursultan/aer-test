import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableHead from "../tableHead";

describe("Table header", () => {
  beforeEach(() =>
    render(
      <table>
        <TableHead />
      </table>
    )
  );
  it("should has column text", async () => {
    const col = await screen.findByText("name");
    expect(col).toBeInTheDocument();
  })
})
