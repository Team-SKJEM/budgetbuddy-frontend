import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../theme/theme";
import { MemoryRouter } from "react-router-dom";

// Create config to force light mode
const config = {
  ...system,
  initialColorMode: "light",
  useSystemColorMode: false,
};

const renderWithProvider = (children: ReactNode) => {
  return render(
    <MemoryRouter>
      <ChakraProvider value={config}>{children}</ChakraProvider>
    </MemoryRouter>,
  );
};

export * from "@testing-library/react";
export { renderWithProvider as render };
