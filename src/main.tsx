import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme/theme";

// Create config to force light mode
const config = {
  ...system,
  initialColorMode: "light",
  useSystemColorMode: false,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={config}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
