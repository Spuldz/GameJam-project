import { useEffect } from "react";
import { Route, Routes, useHistory, useNavigate } from "react-router-dom";
import Gameplay from "./components/Gameplay";
import CustomizationPage from "./pages/CustomizationPage";
import DefaultPage from "./pages/DefaultPage";
import allowedPathsOnLogged from "./data/allowedPathsOnLogged.json";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GameplayPage from "./pages/GameplayPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("logged") === "1" &&
      !allowedPathsOnLogged.includes(window.location.pathname)
    ) {
      navigate("/gameplay");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/gameplay" element={<GameplayPage />} />
      <Route path="/customization" element={<CustomizationPage />} />
      {/* <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotPassword" element={<ForgotPasswordPage />} /> */}
    </Routes>
  );
}

export default App;
