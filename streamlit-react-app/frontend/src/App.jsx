import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SeparatorPage from "./pages/SeparatorPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/calculator" element={<SeparatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
