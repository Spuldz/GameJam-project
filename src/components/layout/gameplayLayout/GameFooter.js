function Footer(props) {
  return (
    <footer className="gameplayFooter">
      <div id="attack1" onClick={props.attack1} className="gameOptions"></div>
      <div id="attack2" onClick={props.attack2} className="gameOptions"></div>
      <div id="heal1" onClick={props.heal} className="gameOptions"></div>
    </footer>
  );
}

export default Footer;
