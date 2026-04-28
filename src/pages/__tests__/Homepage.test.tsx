import { render, screen } from "../../tests/utils";
import content from "../../locale/en";
import Homepage from "../Homepage";

describe("tests for the Home Page", () => {
  beforeAll(() => {
    render(<Homepage />);
  });

  it("should render content on the homepage", () => {
    expect(screen.getByText(content.home.title)).toBeInTheDocument();
  });
});
