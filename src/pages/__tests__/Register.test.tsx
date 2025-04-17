import { render, screen } from "@testing-library/react";
import Register from "../Register";
import content from "../../locale/en";

describe("tests for the Register Page", () => {
  beforeAll(() => {
    render(<Register />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText(content.register.title)).toBeInTheDocument();
  });
});
