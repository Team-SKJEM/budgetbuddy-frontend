import React from "react";
import { Provider } from "./components/ui/provider";
import { Navbar } from "./components";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      <Box
        bgGradient="linear(to-b, #87C2F3, #D3E6F6)"
        minHeight="100vh"
        pt="60px"
      >
        <Navbar />
      </Box>
    </Provider>
  );
}

export default App;
