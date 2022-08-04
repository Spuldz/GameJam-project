import { useEffect, useState } from "react";
import CustomizationCharacter from "../components/CustomizationCharacter";
import characterStats from "../data/characterStats.json";

import Footer from "../components/layout/customizationPageLayout/Footer";
import StatBoard from "../components/StatBoard";

function CustomizationPage() {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(characterStats[index]);

  useEffect(() => {
    setChar(characterStats[index])
  }, [index])

  function next() {
    if (index > characterStats.length - 1 || (index + 1) > characterStats.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1)
    }
  
  }
  
  function prev() {
    if ( index < 0 || (index - 1) < 0) {
      setIndex(characterStats.length - 1);
    } else {
      setIndex(index - 1)
    }
  }

  function saveCharacter() {
    localStorage.setItem('character', JSON.stringify(char))
    localStorage.setItem('logged', 1)

    window.location.href = 'gameplay';
  }
  
  return (
    <>
      <StatBoard character={char} />
      <CustomizationCharacter next={next} prev={prev} character={char} />
      <Footer saveCharacter={saveCharacter} />
    </>
  );
}

export default CustomizationPage;
