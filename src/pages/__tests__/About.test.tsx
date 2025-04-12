import { render, screen } from "@testing-library/react";
import About from "../About";

describe("tests for the About Page", () => {
  beforeAll(() => {
    render(<About />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });
});
