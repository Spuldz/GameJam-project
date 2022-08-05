function CustomizationCharacter({ character, next, prev }) {
  return (
    <>
      <div className="customCharCont">
        <img
          className="customChar"
          id="customChar"
          src={character.img}
          alt="character"
        />
        <div className="BtnHolder">
          <div className="prevBtn" id="prevBtn" onClick={prev}></div>
          <div className="nameHolder" id="nameHolder">
            {character.name}
          </div>
          <div className="nextBtn" onClick={next}></div>
        </div>
      </div>
    </>
  );
}

export default CustomizationCharacter;
