import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from "../checkBox";
import "@testing-library/jest-dom";

describe("Checkbox component", () => {
  it("should be checked", async () => {
    const { container } = render(<CheckBox id={1} />);
    const checkbox = container.querySelector("#checked-checkbox");
    await userEvent.click(checkbox as Element);
    expect(checkbox).toBeEnabled();
  });
});
