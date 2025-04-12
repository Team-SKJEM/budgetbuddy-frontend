import { render, screen } from "@testing-library/react";
import Mission from "../Mission";

describe("tests for the Mission Page", () => {
  beforeAll(() => {
    render(<Mission />);
  });

  it("should render the correct content", () => {
    expect(screen.getByText("Mission Page")).toBeInTheDocument();
  });
});
