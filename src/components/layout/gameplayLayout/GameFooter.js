function Footer(props) {
  function attack1Handler() {
    props.attack1();
    let a = document.getElementById("attack1");
    let b = document.getElementById("attack2");
    let c = document.getElementById("heal1");
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    let timer = setInterval(() => {
      a.disabled = false;
      b.disabled = false;
      c.disabled = false;
      clearInterval(timer);
    }, 1000);
  }

  function attack2Handler() {
    props.attack2();
    let a = document.getElementById("attack1");
    let b = document.getElementById("attack2");
    let c = document.getElementById("heal1");
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    let timer = setInterval(() => {
      a.disabled = false;
      b.disabled = false;
      c.disabled = false;
      clearInterval(timer);
    }, 1000);
  }

  function healHandler() {
    props.heal();
    let a = document.getElementById("attack1");
    let b = document.getElementById("attack2");
    let c = document.getElementById("heal1");
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    let timer = setInterval(() => {
      a.disabled = false;
      b.disabled = false;
      c.disabled = false;
      clearInterval(timer);
    }, 1000);
  }

  function healHandler() {}
  return (
    <footer className="gameplayFooter">
      <button
        id="attack1"
        onClick={attack1Handler}
        className="gameOptions"
      ></button>
      <button
        id="attack2"
        onClick={attack2Handler}
        className="gameOptions"
      ></button>
      <button id="heal1" onClick={props.heal} className="gameOptions"></button>
    </footer>
  );
}

export default Footer;
