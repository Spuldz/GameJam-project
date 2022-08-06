import { useEffect } from "react";
import { Route, Routes, useHistory, useNavigate } from "react-router-dom";
import CustomizationPage from "./pages/CustomizationPage";
import DefaultPage from "./pages/DefaultPage";
import allowedPathsOnLogged from "./data/allowedPathsOnLogged.json";
import GameplayPage from "./pages/GameplayPage";
import CoinStorePage from "./pages/CoinStorePage";
import Shop from "./components/Shop";

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
      <Route path="/store" element={<CoinStorePage />} />
      <Route path="/gameplay/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
