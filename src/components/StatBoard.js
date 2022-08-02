function StatBoard({ character }) {
  return (
    <div className="statBoard" id="statBoard">
      <div id="power-bar" className="bars">
        {"Power: " + character.power}
      </div>
      <div id="hp-bar" className="bars">
        {"Hp: " + character.hp}
      </div>
      <div id="price" className="bars">
        {"Price: " + character.price}
      </div>
    </div>
  );
}

export default StatBoard;
