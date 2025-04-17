import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import content from "../locale/en";

describe("tests for the homepage", () => {
  beforeAll(() => {
    render(<Homepage />);
  });

  it("should render content on the homepage", () => {
    expect(screen.getByText(content.home.title)).toBeInTheDocument();
  });
});
