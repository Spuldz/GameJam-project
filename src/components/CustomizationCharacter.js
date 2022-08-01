import { useState } from "react";
import characterStats from "../data/characterStats.json";

function CustomizationCharacter(props) {
  const [char, setChar] = useState(characterStats[0]);
  let [index, setIndex] = useState(0);

  let selectedCharacter = characterStats[index];
  
  function getNext() {
    setIndex(++index)

    if (index > characterStats.length - 1) {
      setIndex(0);
      selectedCharacter = characterStats[0]
    } else {
      selectedCharacter = characterStats[index]
    }

    setChar(selectedCharacter)
  }
  
  function getPrev() {
    setIndex(--index)

    if (index < 0) {
      setIndex(characterStats.length - 1);
      selectedCharacter = characterStats[characterStats.length - 1]
    } else {
      selectedCharacter = characterStats[index]
    }

    setChar(selectedCharacter)
  }

  return (
    <div className="customCharCont">
      <img className="customChar" id="customChar" src={char.img} alt="character" />
      <div className="BtnHolder">
        <div className="prevBtn" id="prevBtn" onClick={getPrev}></div>
        <div className="nextBtn" onClick={getNext}></div>
      </div>
    </div>
  );
}

export default CustomizationCharacter;
