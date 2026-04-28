import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../Register";
import { ChakraProvider } from "@chakra-ui/react";
import content from "../../locale/en";
import { system } from "../../theme/theme";

const config = {
  ...system,
  initialColorMode: "light",
  useSystemColorMode: false,
};

describe("tests for the Register Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <ChakraProvider value={config}>
        <Register />
      </ChakraProvider>,
    );
  });

  it("should render the correct content", () => {
    expect(screen.getByText(content.register.title)).toBeInTheDocument();
  });

  it("shows backend down message if registration fails", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    } as Response);

    fireEvent.click(screen.getByRole("button", { name: content.register.cta }));

    await waitFor(() => {
      expect(
        screen.getByText(content.register.error.backendDown),
      ).toBeInTheDocument();
    });
  });
});
