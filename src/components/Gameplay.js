import React, { useEffect, useState } from "react";
import Footer from "../components/layout/gameplayLayout/GameFooter";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Gameplay({ player, enemy, generateEnemyChar }) {
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
      addCoins();

      if (player.level >= 1 && player.level < 20) {
        localStorage.setItem('level', player.level += 1);
      } else if (player.level >= 20 && player.level < 50) {
        localStorage.setItem('level', player.level += 0.5);
      } else if (player.level >= 50 && player.level < 90) {
        localStorage.setItem('level', player.level += 0.2);
      } else if (player.level >= 90 && player.level < 100) {
        localStorage.setItem('level', player.level += 0.1);
      } else if (player.level >= 100 && player.level < 150) {
        localStorage.setItem('level', player.level += 0.05);
      } else if (player.level >= 150 && player.level < 300) {
        localStorage.setItem('level', player.level += 0.02);
      } else if (player.level >= 300) {
        localStorage.setItem('level', player.level += 0.01);
      }


    } else {
      setEnemyHealth((enemyHealth || enemy.hp) - player.character.power);
    }
  }

  function addCoins() {
    let coins = localStorage.getItem('coins');
    coins = parseInt(coins) || 0
    localStorage.setItem('coins', coins + 60); // later change to dynamic coins
  }

  function playAgain() {
    setFightEnd(false);
    generateEnemyChar()
    setEnemyHealth(enemy.hp)
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
