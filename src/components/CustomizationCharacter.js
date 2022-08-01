import characterStats from "../data/characterStats.json";

let index = 0;
let selectedCharacter = characterStats[index];

function getNext() {
  if (index >= characterStats.length - 1) {
    index = 0;
    selectedCharacter = characterStats[index];
    console.log(selectedCharacter.power);
  } else {
    index++;
    selectedCharacter = characterStats[index];
    console.log(selectedCharacter.power);
  }
  document.getElementById("customChar").style.backgroundImage =
    "URL(" + characterStats[index].img + ")";
}

function getPrev() {
  if (index <= 0) {
    index = characterStats.length - 1;
    selectedCharacter = characterStats[index];
    console.log(selectedCharacter.power);
  } else {
    index--;
    selectedCharacter = characterStats[index];
    console.log(selectedCharacter.power);
  }
  document.getElementById("customChar").style.backgroundImage =
    "URL(" + characterStats[index].img + ")";
}

function CustomizationCharacter(props) {
  return (
    <div className="customCharCont">
      <div className="customChar" id="customChar"></div>
      <div className="BtnHolder">
        <div className="prevBtn" id="prevBtn" onClick={getPrev}></div>
        <div className="nextBtn" onClick={getNext}></div>
      </div>
    </div>
  );
}

export default CustomizationCharacter;
