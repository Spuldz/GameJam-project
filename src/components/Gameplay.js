import React from "react";
let selectedCharacter = JSON.parse(localStorage.getItem("character"));
let hp = Math.floor(Math.random() * (100 - 70 + 1)) + 70;

function Gameplay() {
  return (
    <div className="characterHolder">
      <div className="characters">
        <div className="character" id="character"></div>;
        <div className="character" id="enemy"></div>
      </div>
      <div className="info">
        <div className="hp" id="characterHP">
          <div className="heartImgHolder">
            {selectedCharacter.hp + "/" + selectedCharacter.hp}
          </div>
        </div>
        <div className="hp" id="enemyHP">
          <div className="heartImgHolder">{hp + "/" + hp}</div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
