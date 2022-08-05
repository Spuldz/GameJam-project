function Modal(props) {
  return (
    <div id="myModal" className="modal">
      <div className="youWinCont">You Win!</div>
      <div className="coinEarnedCont">Coins Earned: 60</div>
      <div className="btnHolder">
        <button className="buttons" onClick={props.playAgain}>
          Play Again
        </button>
        <button className="buttons" onClick={props.backToLobby}>
          Back to Lobby
        </button>
      </div>
    </div>
  );
}

export default Modal;
