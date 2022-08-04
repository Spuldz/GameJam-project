function Footer({ saveCharacter }) {
  return (
    <header className="footer">
      <div onClick={() => saveCharacter()} className="createBtn"></div>
    </header>
  );
}

export default Footer;
