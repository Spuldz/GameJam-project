import { useEffect, useState } from "react";
import characterStats from "../data/characterStats.json";
import Footer from "./layout/customizationPageLayout/Footer";

function CustomizationCharacter(props) {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(characterStats[index]);

  useEffect(() => {
    setChar(characterStats[index])
  }, [index])

  function getNext() {
    if (index > characterStats.length - 1 || (index + 1) > characterStats.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1)
    }
  
  }
  
  function getPrev() {
    if ( index < 0 || (index - 1) < 0) {
      setIndex(characterStats.length - 1);
    } else {
      setIndex(index - 1)
    }
  }

  function onNextHandler() {
      getNext();
      props.updateNext();
  }

  function onPreviousHandler() {
      getPrev();
      props.updatePrev();
  }

  return (
    <>
      <div className="customCharCont">
        <img className="customChar" id="customChar" src={char.img} alt="character" />
        <div className="BtnHolder">
          <div
            className="prevBtn"
            id="prevBtn"
            onClick={onPreviousHandler}
          ></div>
          <div className="nameHolder" id="nameHolder">
            {char.name}
          </div>
          <div className="nextBtn" onClick={onNextHandler}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomizationCharacter;