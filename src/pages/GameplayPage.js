import arenaBackground from "../assets/arenaBackground.jpg";
import Gameplay from "../components/Gameplay";
import Footer from "../components/layout/gameplayLayout/GameFooter";
let a = JSON.parse(localStorage.getItem("character"));

function GameplayPage() {
  document.querySelector("body").style.backgroundImage =
    "URL(" + arenaBackground + ")";
  return (
    <>
      <Gameplay />
      <Footer />
    </>
  );
}

export default GameplayPage;
