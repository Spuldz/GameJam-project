import { useNavigate } from "react-router-dom";

function StatBoard({ character }) {
  const navigate = useNavigate();

  function toStore() {
    navigate("/store");
  }

  function toShop() {
    navigate("/gameplay/shop");
  }
  return (
    <div className="statBoard" id="statBoard">
      <div className="optionsCont">
        <div id="shopIcon" className="opt" onClick={toShop}></div>
        <div id="storeIcon" className="opt" onClick={toStore}></div>
      </div>
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
