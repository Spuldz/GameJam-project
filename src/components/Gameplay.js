import React, { useEffect, useState } from "react";
import Footer from "../components/layout/gameplayLayout/GameFooter";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Gameplay({ player, enemy }) {
  const [enemyHealth, setEnemyHealth] = useState(null);
  const [fightEnd, setFightEnd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setEnemyHealth(enemy.hp);
  }, []);

  function attack() {
    if ((enemyHealth || enemy.hp) - player.character.power < 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
    } else {
      setEnemyHealth((enemyHealth || enemy.hp) - player.character.power);
    }

    console.log("attack");

    console.log(enemy);
  }

  function playAgain() {
    setFightEnd(false);
  }

  function backToLobby() {
    navigate("/customization");
  }

  return (
    <>
      {fightEnd ? (
        <>
          <Modal playAgain={playAgain} backToLobby={backToLobby} />
          <Backdrop />
        </>
      ) : (
        <div className="characterHolder">
          <div className="characters">
            <img
              src={player.character.img}
              className="character"
              id="character"
            />
            ;
            <img src={enemy.img} className="character" id="enemy" />;
          </div>
          <div className="info">
            <div className="hp" id="characterHP">
              <h1 style={{ color: "white" }}>{player.character.name}</h1>
              <div className="heartImgHolder">
                {player.character.hp + "/" + player.character.hp}
              </div>
            </div>
            <div className="hp" id="enemyHP">
              <h1 style={{ color: "white" }}>{enemy.name}</h1>
              <div className="heartImgHolder">
                {(enemyHealth === undefined ? enemy.hp : enemyHealth) +
                  "/" +
                  enemy.hp}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer attack={attack} />
    </>
  );
}

export default Gameplay;
