import "../DefaultPageStyle.css";
import background from "../assets/title-background.jpg";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const navigate = useNavigate();
  document.querySelector("body").style.backgroundImage =
    "URL(" + background + ")";

  function backToLobby() {
    navigate("/customization");
  }
  return (
    <>
      <header className="titleHeader">TUNDRA FIGHT</header>
      <div className="charsHolder">
        <div id="chars" className="characters"></div>
        <div id="enmy" className="characters"></div>
      </div>
      <div className="buttonHolder">
        <button id="playBtn" onClick={backToLobby}>
          Play
        </button>
      </div>
    </>
  );
}

export default DefaultPage;
