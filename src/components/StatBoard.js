import { useEffect, useState } from "react";
import CustomizationCharacter from "./CustomizationCharacter";
import characterStats from "../data/characterStats.json";

//main function
function StatBoard() {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(characterStats[index]);

  useEffect(() => {
    setChar(characterStats[index])
  }, [index])

  function updatePrevStats() {
    if (index <= 0) {
      setIndex(characterStats.length - 1);
    } else {
      setIndex(index - 1)
    }
  }
  
  function updateNextStats() {
    if (index >= characterStats.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function onNextHandler() {
      updateNextStats();
  }

  function onPrevHandler() {
      updatePrevStats();
  }

  return (
    <div className="statBoard" id="statBoard">
      <CustomizationCharacter
        updateNext={onNextHandler}
        updatePrev={onPrevHandler}
      />
      <div id="power-bar" className="bars">
        {"Power: " + char.power}
      </div>
      <div id="hp-bar" className="bars">
        {"Hp: " + char.hp}
      </div>
      <div id="price" className="bars">
        {"Price: " + char.price}
      </div>
    </div>
  );
}

export default StatBoard;
