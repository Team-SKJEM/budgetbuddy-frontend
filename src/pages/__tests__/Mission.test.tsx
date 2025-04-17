import { render, screen } from "@testing-library/react";
import Mission from "../Mission";
import content from "../../locale/en";

describe("tests for the Mission Page", () => {
  beforeAll(() => {
    render(<Mission />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText(content.mission.title)).toBeInTheDocument();
  });
});
