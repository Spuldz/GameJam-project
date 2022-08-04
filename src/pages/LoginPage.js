import LoginComp from "../components/LoginComp";
import UserData from "../data/UserData.json";

function LoginPage() {
  function sendData() {
    const Http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText);
    };
  }

  return (
    <>
      <LoginComp login={sendData} />
    </>
  );
}

export default LoginPage;
