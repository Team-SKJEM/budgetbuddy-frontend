import { render, screen } from "@testing-library/react";
import Register from "../Register";

describe("tests for the Register Page", () => {
  beforeAll(() => {
    render(<Register />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });
});
