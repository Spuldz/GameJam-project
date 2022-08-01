import { Route, Routes } from "react-router-dom";
import CustomizationPage from "./pages/CustomizationPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/customization" element={<CustomizationPage />} />
    </Routes>
  );
}

export default App;
