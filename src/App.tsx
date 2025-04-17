import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Register from "./pages/Register";

function App() {
  return (
    <Router basename="/budgetbuddy-frontend/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
