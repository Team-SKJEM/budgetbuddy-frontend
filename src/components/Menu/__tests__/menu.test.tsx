import { render } from "@testing-library/react";
import { MenuContent } from "../Menu";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  Portal: jest.fn(({ children, disabled }) =>
    disabled ? children : <div data-testid="portal">{children}</div>,
  ),
  Menu: {
    Positioner: jest.fn(({ children }) => (
      <div data-testid="positioner">{children}</div>
    )),
    Content: jest.fn((props) => <div {...props} data-testid="content" />),
  },
}));

describe("MenuContent", () => {
  it("renders content inside a portal by default", () => {
    const { getByTestId } = render(<MenuContent />);
    expect(getByTestId("portal")).toBeInTheDocument();
    expect(getByTestId("positioner")).toBeInTheDocument();
    expect(getByTestId("content")).toBeInTheDocument();
  });

  it("renders content without a portal when portalled is false", () => {
    const { queryByTestId, getByTestId } = render(
      <MenuContent portalled={false} />,
    );
    expect(queryByTestId("portal")).not.toBeInTheDocument();
    expect(getByTestId("positioner")).toBeInTheDocument();
    expect(getByTestId("content")).toBeInTheDocument();
  });
});
