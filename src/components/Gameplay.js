import React, { useEffect, useState } from "react";
import Footer from "../components/layout/gameplayLayout/GameFooter";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Gameplay({ player, enemy }) {
  const [enemyHealth, setEnemyHealth] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(null);
  const [fightEnd, setFightEnd] = useState(false);
  const navigate = useNavigate();

  let maxHealth = player.character.hp;

  useEffect(() => {
    setEnemyHealth(enemy.hp);
    setPlayerHealth(player.character.hp);
  }, []);

  function attack1() {
    if ((enemyHealth || enemy.hp) - player.character.power < 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
      addCoins();
    } else {
      setEnemyHealth((enemyHealth || enemy.hp) - player.character.power);
      let timer = setInterval(() => {
        enemyAttack();
        clearInterval(timer);
      }, 1000);
    }

    console.log("attack");

    console.log(enemy);
  }

  function attack2() {
    if ((enemyHealth || enemy.hp) - player.character.power < 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
      addCoins();
    } else {
      setEnemyHealth((enemyHealth || enemy.hp) - player.character.power - 10);
      let timer = setInterval(() => {
        enemyAttack();
        clearInterval(timer);
      }, 1000);
    }
  }

  function heal() {
    if (playerHealth >= maxHealth) {
      setPlayerHealth(maxHealth);
    } else {
      setPlayerHealth(playerHealth + 20);
    }
  }

  function enemyAttack() {
    setPlayerHealth(playerHealth - enemy.power);
  }

  function addCoins() {
    let coins = localStorage.getItem("coins");
    coins = parseInt(coins) || 0;
    localStorage.setItem("coins", coins + 60); // later change to dynamic coins
  }

  function playAgain() {
    setFightEnd(false);
    setEnemyHealth();
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
                {(playerHealth === undefined
                  ? player.character.hp
                  : playerHealth) +
                  "/" +
                  player.character.hp}
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
      <Footer attack1={attack1} attack2={attack2} heal={heal} />
    </>
  );
}

export default Gameplay;
