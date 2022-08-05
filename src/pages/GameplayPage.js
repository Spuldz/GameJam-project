import { useEffect, useState } from "react";
import arenaBackground from "../assets/arenaBackground.jpg";
import Gameplay from "../components/Gameplay";
import characterStats from "../data/characterStats.json";

function GameplayPage() {
  const [player] = useState({
    character: JSON.parse(localStorage.getItem("character")),
    level: localStorage.getItem("level"),
  });
  const [enemy, setEnemy] = useState({});

  useEffect(() => {
    let index = Math.floor(Math.random() * characterStats.length - 1);
    if (index < 0) {
      index = 2;
    }

    setEnemy({
      hp: getRndInteger(player.character.hp - 30, player.character.hp + 30),
      power: getRndInteger(
        player.character.power - player.character.power / 5,
        player.character.power + player.character.power / 5
      ),
      name: generateEnemyName(),
      img: characterStats[index].img,
    });
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateEnemyName() {
    let fNames = [
      "Terror",
      "God",
      "Shrek",
      "Numba",
      "Piroman",
      "Engineer",
      "Psycho",
    ];
    let lNames = ["Jacky", "Eliminator", "Dominator", "Pigeon", "Dog", "Sunny"];

    return (
      fNames[Math.floor(Math.random() * fNames.length - 1)] +
      " " +
      lNames[Math.floor(Math.random() * lNames.length - 1)]
    );
  }

  document.querySelector("body").style.backgroundImage =
    "URL(" + arenaBackground + ")";
  return (
    <>
      <Gameplay player={player} enemy={enemy} />
    </>
  );
}

export default GameplayPage;
