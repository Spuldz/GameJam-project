function CoinStoreModal(props) {
  return (
    <div className="coinStoreModal">
      <div id="closeBtn" onClick={props.close}></div>
      <h1 id="amount">Price: {props.price}</h1>
      <div className="row1">
        <input
          type="number"
          className="bank-info"
          id="card-number"
          placeholder="Card Number"
        />
        <input type="text" className="bank-info" id="CVC" placeholder="CVC" />
      </div>

      <div className="row2">
        <input
          type="text"
          className="bank-info"
          placeholder="Card Owner Name"
          id="name"
        />
        <input
          type="text"
          className="bank-info"
          placeholder="Card Owner Surname"
          id="surname"
        />
      </div>
      <div className="payBtnHolder">
        <button id="payBtn" onClick={props.pay}>
          PAY
        </button>
      </div>
    </div>
  );
}

export default CoinStoreModal;
