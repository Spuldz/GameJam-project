function Footer({attack}) {
  return (
    <footer className="gameplayFooter">
      <div id="attack1" onClick={attack} className="gameOptions"></div>
      <div id="attack2" className="gameOptions"></div>
      <div id="heal1" className="gameOptions"></div>
    </footer>
  );
}

export default Footer;
