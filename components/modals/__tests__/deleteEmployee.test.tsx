import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockTestProvider } from "@/helpers/mockProviders";
import userEvent from "@testing-library/user-event";
import DeleteEmployee from "../deleteEmployee";

describe("Delete modal test", () => {
  beforeEach(() => render(mockTestProvider(<DeleteEmployee id={1} name="" />)));
  it("find the delete button", async () => {
    const deleteButton = await screen.findByRole("button");
    expect(deleteButton).toBeInTheDocument();
  });
  it("should open modal", async () => {
    const deleteButton = await screen.findByRole("button");
    await userEvent.click(deleteButton);
    const text = await screen.findByText(
      "* all data will be permanently deleted"
    );
    expect(text).toBeInTheDocument();
  });
  it("should able to delete and close modal", async () => {
    const deleteButton = await screen.findByRole("button");
    await userEvent.click(deleteButton);
    const text = await screen.findByText(
      "* all data will be permanently deleted"
    );
    const saveButton = await screen.findByRole("button", { name: "Delete" });
    await userEvent.click(saveButton);
    expect(text).not.toBeInTheDocument();
  });
});
