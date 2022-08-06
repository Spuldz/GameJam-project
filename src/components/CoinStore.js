import { useState } from "react";
import Backdrop from "./Backdrop";
import CoinStoreModal from "./CoinStoreModal";

function CoinStore(props) {
  return (
    <>
      <div className="main">
        <div className="cardHolder">
          <div className="card" onClick={props.payHandler1}>
            <h1>{props.amount1} coins</h1>
            <div className="coinImg" id="coinImg1"></div>
          </div>
          <div className="card" onClick={props.payHandler2}>
            <h1>{props.amount2} coins</h1>
            <div className="coinImg" id="coinImg2"></div>
          </div>
          <div className="card" onClick={props.payHandler3}>
            <h1>{props.amount3} coins</h1>
            <div className="coinImg" id="coinImg3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinStore;
