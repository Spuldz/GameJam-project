import React, { useEffect, useState } from "react";
import Footer from "../components/layout/gameplayLayout/GameFooter";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Gameplay({ player, enemy, generateEnemyChar }) {
  const [enemyHealth, setEnemyHealth] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(null);
  const [fightEnd, setFightEnd] = useState(false);
  const [Winstreak, setWinstreak] = useState(0);
  const [playerWin, setPlayerWin] = useState(false);
  const [playerLose, setPlayerLose] = useState(false);
  const [enemyImg, setEnemyImg] = useState(enemy.img);
  const [playerImg, setPlayerImg] = useState(player.character.img);
  const navigate = useNavigate();

  let maxHealth = player.character.hp;

  useEffect(() => {
    setEnemyHealth(enemy.hp);
    setPlayerHealth(player.character.hp);
  }, []);

  function attack1() {
    if ((enemyHealth || enemy.hp) - player.character.power <= 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
      addCoins();

      if (player.level >= 1 && player.level < 20) {
        localStorage.setItem("level", (player.level += 1));
      } else if (player.level >= 20 && player.level < 50) {
        localStorage.setItem("level", (player.level += 0.5));
      } else if (player.level >= 50 && player.level < 90) {
        localStorage.setItem("level", (player.level += 0.2));
      } else if (player.level >= 90 && player.level < 100) {
        localStorage.setItem("level", (player.level += 0.1));
      } else if (player.level >= 100 && player.level < 150) {
        localStorage.setItem("level", (player.level += 0.05));
      } else if (player.level >= 150 && player.level < 300) {
        localStorage.setItem("level", (player.level += 0.02));
      } else if (player.level >= 300) {
        localStorage.setItem("level", (player.level += 0.01));
      }

      setPlayerWin(true);
    } else {
      if (player.character.img.split("/").length - 1 > 1) {
        player.character.img =
          "characters/enemyShoot/" + player.character.img.split("/")[2];
        setPlayerImg(player.character.img);
      } else {
        player.character.img =
          "characters/enemyShoot/" + player.character.img.split("/")[1];
        setPlayerImg(player.character.img);
      }

      if (playerHealth <= 0) {
        setFightEnd(true);
        setPlayerLose(true);
      }
      let newEnemyHealth =
        (enemyHealth || enemy.hp) - player.character.power - 10;
      setEnemyHealth(newEnemyHealth);
      if (newEnemyHealth <= 0) {
        setEnemyHealth(0);
        setFightEnd(true);
        addCoins();
        setPlayerWin(true);
      }

      let timer = setInterval(() => {
        enemyAttack();
        clearInterval(timer);
      }, 1000);

      if (player.character.img.split("/").length - 1 > 1) {
        setTimeout(() => {
          player.character.img =
            "characters/" + player.character.img.split("/")[2];
          setPlayerImg(player.character.img);
        }, 1000);
      }
    }
  }

  function attack2() {
    if ((enemyHealth || enemy.hp) - player.character.power <= 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
      addCoins();
      setPlayerWin(true);
    } else {
      let newEnemyHealth =
        (enemyHealth || enemy.hp) - player.character.power - 10;
      setEnemyHealth(newEnemyHealth);
      if (newEnemyHealth <= 0) {
        setEnemyHealth(0);
        setFightEnd(true);
        addCoins();
        setPlayerWin(true);
      }
      let timer = setInterval(() => {
        enemyAttack();
        if (playerHealth <= 0) {
          setPlayerLose(true);
        }
        clearInterval(timer);
      }, 1000);
    }
  }

  function heal() {
    if ((enemyHealth || enemy.hp) - player.character.power <= 0) {
      setEnemyHealth(0);
      setFightEnd(true); // make bjutifal visualisation for match end :)
      addCoins();
      setPlayerWin(true);
    } else {
      let newPlayerHealth = playerHealth + 20;
      setPlayerHealth(newPlayerHealth);

      if (newPlayerHealth >= maxHealth) {
        setPlayerHealth(maxHealth);
      }

      let timer = setInterval(() => {
        enemyAttack();
        if (playerHealth <= 0) {
          setPlayerLose(true);
        }
        clearInterval(timer);
      }, 1000);
    }
  }

  function enemyAttack() {
    let newPlayerHealth = playerHealth - enemy.power;
    setPlayerHealth(newPlayerHealth);
    enemy.img = "characters/enemyLeftShoot/" + enemy.img.split("/")[2];
    setEnemyImg(enemy.img);

    if (newPlayerHealth <= 0) {
      setFightEnd(true);
      setPlayerLose(true);
    }
    setTimeout(() => {
      enemy.img = "characters/enemyLeft/" + enemy.img.split("/")[2];
      setEnemyImg(enemy.img);
    }, 1000);
  }

  function addCoins() {
    let coins = localStorage.getItem("coins");
    coins = parseInt(coins) || 0;
    localStorage.setItem("coins", coins + 5); // later change to dynamic coins
  }

  function playAgain() {
    setFightEnd(false);
    let enemyChar = generateEnemyChar();
    setEnemyHealth(enemyChar.hp);
    setPlayerHealth(player.character.hp);
  }

  function backToLobby() {
    navigate("/customization");
  }

  return (
    <>
      {fightEnd ? (
        <>
          {playerWin ? (
            <>
              <Modal
                playAgain={playAgain}
                backToLobby={backToLobby}
                text={"You Win!"}
                coins={5}
              />
              <Backdrop />
            </>
          ) : null}

          {playerLose ? (
            <>
              <Modal
                playAgain={playAgain}
                backToLobby={backToLobby}
                text={"You Lose!"}
                coins={0}
              />
              <Backdrop />
            </>
          ) : null}
        </>
      ) : (
        <div className="characterHolder">
          <div className="characters">
            <img
              src={playerImg || player.img}
              className="character"
              id="character"
            />
            ;
            <img src={enemyImg || enemy.img} className="character" id="enemy" />
            ;
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
