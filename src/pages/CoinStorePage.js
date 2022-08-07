import CoinStoreStyle from "../CoinStoreStyle.css";
import Backdrop from "../components/Backdrop";
import CoinStore from "../components/CoinStore";
import CoinStoreModal from "../components/CoinStoreModal";
import { useState } from "react";
import CoinStoreData from "../data/CoinStoreData.json";
import { useNavigate } from "react-router-dom";

function CoinStorePage() {
  const [cardClicked, setCardClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  function payHandler1() {
    setIndex(0);
    setCardClicked(true);
  }

  function payHandler2() {
    setIndex(1);
    setCardClicked(true);
  }

  function payHandler3() {
    setIndex(2);
    setCardClicked(true);
  }

  function closeModal() {
    setCardClicked(false);
  }

  function addCoins() {
    let coins = localStorage.getItem("coins");
    coins = parseInt(coins) || 0;
    localStorage.setItem("coins", coins + CoinStoreData[index].amount);
  }

  function pay() {
    addCoins();
    setCardClicked(false);
  }

  function back() {
    navigate("/customization");
  }

  return (
    <>
      {cardClicked ? (
        <>
          <CoinStoreModal
            price={CoinStoreData[index].price}
            close={closeModal}
            pay={pay}
          />
        </>
      ) : null}
      <CoinStore
        payHandler1={payHandler1}
        payHandler2={payHandler2}
        payHandler3={payHandler3}
        amount1={CoinStoreData[0].amount}
        amount2={CoinStoreData[1].amount}
        amount3={CoinStoreData[2].amount}
        back={back}
      />
    </>
  );
}

export default CoinStorePage;
