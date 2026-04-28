import { render, screen } from "../../tests/utils";
import About from "../About";
import content from "../../locale/en";

describe("tests for the About Page", () => {
  beforeAll(() => {
    render(<About />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText(content.about.title)).toBeInTheDocument();
  });
});
