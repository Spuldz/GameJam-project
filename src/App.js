import { Route, Routes } from "react-router-dom";
import CustomizationPage from "./pages/CustomizationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/customization" element={<CustomizationPage />} />
    </Routes>
  );
}

export default App;
