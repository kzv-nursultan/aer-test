import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployee from "../addEmployee";
import { mockTestProvider } from "@/helpers/mockProviders";
import userEvent from "@testing-library/user-event";

describe("Add employee modal test", () => {
  it("should has button", async () => {
    render(mockTestProvider(<AddEmployee />));
    const button = await screen.findByRole("button", { name: "Add employee" });
    expect(button).toBeInTheDocument();
  });
  it("should open add employee modal", async () => {
    render(mockTestProvider(<AddEmployee />));
    const button = await screen.findByRole("button", { name: "Add employee" });
    await userEvent.click(button);
    const text = await screen.findByText("Create Employee");
    expect(text).toBeInTheDocument();
  });
  it("should fill the form", async () => {
    const result = render(mockTestProvider(<AddEmployee />));
    const button = await screen.findByRole("button", { name: "Add employee" });
    await userEvent.click(button);
    const nameInput = result.container.querySelector("#id-for-name-input");
    const emailInput = result.container.querySelector("#id-for-email-input");
    const positionInput = result.container.querySelector(
      "#id-for-position-input"
    );
    const departmentInput = result.container.querySelector(
      "#id-for-department-input"
    );
    await userEvent.type(nameInput as Element, "name");
    await userEvent.type(emailInput as Element, "email@email");
    await userEvent.type(positionInput as Element, "position");
    await userEvent.type(departmentInput as Element, "department");
    const saveButton = await screen.findByRole("button", { name: "Save" });
    const text = await screen.findByText("Create Employee");
    await userEvent.click(saveButton);
    expect(text).not.toBeInTheDocument();
  });
});
