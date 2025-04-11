import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// Create config to force light mode
const config = {
  ...defaultSystem,
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
