import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "./components/Welcome";
import SeparatorPage from "./pages/SeparatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/separator" element={<SeparatorPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
