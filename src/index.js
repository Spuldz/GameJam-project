import React from "react";
import ReactDOM from "react-dom/client";
import "./customizationPageStyle.css";
import "./LoginPageStyle.css";
import "./LoginPageStyle2.css";
import "./ForgotPasswordStyle.css";
import "./ForgotPasswordStyle2.css";
import "./gameplayStyle.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
