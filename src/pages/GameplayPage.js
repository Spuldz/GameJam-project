import { useEffect, useState } from "react";
import arenaBackground from "../assets/arenaBackground.jpg";
import Gameplay from "../components/Gameplay";
import characterStats from "../data/characterStats.json";

function GameplayPage() {
  const [player] = useState({
    character: JSON.parse(localStorage.getItem("character")),
    level: parseInt(localStorage.getItem("level")) || null,
  });
  const [enemy, setEnemy] = useState({});

  useEffect(() => {
    generateEnemyChar()
  }, []);

  function generateEnemyChar() {
    let index = Math.floor(Math.random() * characterStats.length - 1);
    if (index < 0) {
      index = 2;
    }
    
    setEnemy({
      hp: getRndInteger(player.character.hp - Math.floor(player.character.hp / 10), player.character.hp + Math.floor(player.character.hp / 10)),
      power: getRndInteger(
        player.character.power - player.character.power / 5,
        player.character.power + player.character.power / 5
      ),
      name: generateEnemyName(),
      img: 'characters/enemyLeft/' + characterStats[index].img.split('/')[1],
    });
  }

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
      <Gameplay player={player} enemy={enemy} generateEnemyChar={generateEnemyChar} />
    </>
  );
}

export default GameplayPage;
