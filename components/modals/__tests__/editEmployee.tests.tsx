import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockTestProvider } from "@/helpers/mockProviders";
import userEvent from "@testing-library/user-event";
import EditEmployee from "../editEmployee";

const mockEmployee = {
  id: 1,
  name: "",
  age: 0,
  email: "",
  position: "",
  department: "",
};

describe("test edit employee data modal", () => {
  it("should make sure that edit button exist", async () => {
    render(mockTestProvider(<EditEmployee employee={mockEmployee} />));
    const editButton = await screen.findByRole("button");
    await userEvent.click(editButton);
    expect(editButton).toBeEnabled();
  });
  it("should be able to add text to the input", async () => {
    const { container } = render(
      mockTestProvider(<EditEmployee employee={mockEmployee} />)
    );
    const editButton = await screen.findByRole("button");
    await userEvent.click(editButton);
    const nameInput = container.querySelector("#id-for-name-input");
    await userEvent.type(nameInput as Element, "employee");
    expect(nameInput).toHaveValue("employee");
  });
});
