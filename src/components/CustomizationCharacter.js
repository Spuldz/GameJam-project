import characterStats from "../data/characterStats.json";
import Footer from "./layout/customizationPageLayout/Footer";

let index = 0;
let selectedCharacter = characterStats[index];

function getNext() {
  if (index >= characterStats.length - 1) {
    index = 0;
    selectedCharacter = characterStats[index];
  } else {
    index++;
    selectedCharacter = characterStats[index];
  }

  document.getElementById("customChar").style.backgroundImage =
    "URL(" + selectedCharacter.img + ")";
  document.getElementById("nameHolder").textContent = selectedCharacter.name;
}

function getPrev() {
  if (index <= 0) {
    index = characterStats.length - 1;
    selectedCharacter = characterStats[index];
  } else {
    index--;
    selectedCharacter = characterStats[index];
  }
  document.getElementById("customChar").style.backgroundImage =
    "URL(" + selectedCharacter.img + ")";

  document.getElementById("nameHolder").textContent = selectedCharacter.name;
}

function logName() {
  console.log("selected character: " + selectedCharacter.name);
}

function CustomizationCharacter(props) {
  let t = true;

  function onNextHandler() {
    if (t) {
      getNext();
      props.updateNext();
      console.log();
    }
  }

  function onPreviousHandler() {
    if (t) {
      getPrev();
      props.updatePrev();
    }
  }

  return (
    <>
      <div className="customCharCont">
        <div className="customChar" id="customChar"></div>
        <div className="BtnHolder">
          <div
            className="prevBtn"
            id="prevBtn"
            onClick={onPreviousHandler}
          ></div>
          <div className="nameHolder" id="nameHolder">
            {characterStats[index].name}
          </div>
          <div className="nextBtn" onClick={onNextHandler}></div>
        </div>
      </div>
      <Footer click={logName} />
    </>
  );
}

export default CustomizationCharacter;
