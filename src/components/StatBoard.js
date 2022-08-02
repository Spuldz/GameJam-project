import CustomizationCharacter from "./CustomizationCharacter";
import characterStats from "../data/characterStats.json";
import { useState } from "react";
let index = 0;

function updatePrevStats() {
  if (index <= 0) {
    index = characterStats.length - 1;
  } else {
    index--;
  }
}

function updateNextStats() {
  if (index >= characterStats.length - 1) {
    index = 0;
  } else {
    index++;
  }
}

//main function
function StatBoard() {
  const t = true;

  function onNextHandler() {
    if (t) {
      updateNextStats();
      document.getElementById("power-bar").textContent =
        "Power: " + characterStats[index].power;

      document.getElementById("hp-bar").textContent =
        "Hp: " + characterStats[index].hp;

      document.getElementById("price").textContent =
        "Price: " + characterStats[index].price;
    }
  }

  function onPrevHandler() {
    if (t) {
      updatePrevStats();
      document.getElementById("power-bar").textContent =
        "Power: " + characterStats[index].power;

      document.getElementById("hp-bar").textContent =
        "Hp: " + characterStats[index].hp;

      document.getElementById("price").textContent =
        "Price: " + characterStats[index].price;
    }
  }

  return (
    <div className="statBoard" id="statBoard">
      <CustomizationCharacter
        updateNext={onNextHandler}
        updatePrev={onPrevHandler}
      />
      <div id="power-bar" className="bars">
        {"Power: " + characterStats[index].power}
      </div>
      <div id="hp-bar" className="bars">
        {"Hp: " + characterStats[index].hp}
      </div>
      <div id="price" className="bars">
        {"Price: " + characterStats[index].price}
      </div>
    </div>
  );
}

export default StatBoard;
