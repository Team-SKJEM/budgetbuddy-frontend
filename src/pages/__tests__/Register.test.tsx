import { render, screen } from "@testing-library/react";
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
  beforeAll(() => {
    render(
      <ChakraProvider value={config}>
        <Register />
      </ChakraProvider>,
    );
  });

  it("should render the correct content", () => {
    expect(screen.getByText(content.register.email)).toBeInTheDocument();
  });
});
