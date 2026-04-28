import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components";
import HomePage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <Router basename="/budgetbuddy-frontend/">
      <Navbar />
      <Box pt="92px">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
