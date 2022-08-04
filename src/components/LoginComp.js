import React from "react";
import { Link } from "react-router-dom";
function LoginComp(props) {
  document.querySelector("body").style.backgroundImage = "none";

  return (
    <div
      className="utility-page-wrapper"
      style={{
        background: "linear-gradient(135deg, #151720, #299617)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="utility-page-wrapper-content with-card">
        <div className="utility-page-form card max-width">
          <h1 className="utility-card-title h2" style={{ textAlign: "left" }}>
            Log in
          </h1>
          <div className="w-form">
            <form
              id="wf-form-sign-in-form"
              name="wf-form-sign-in-form"
              data-name="sign in form"
            >
              <input
                type="hidden"
                name="csrf_test_name"
                value="1a483e067090faf109a1ad2dbe1e2fb0"
              ></input>
              <div className="text-field-wrap small-margin-bottom paragraph100">
                <label htmlFor="email" className="field-label bodySmall100">
                  E-mail address
                </label>
                <input
                  type="email"
                  className="inputField w-input"
                  maxLength="256"
                  name="email"
                  data-name="email"
                  id="email"
                  required=""
                ></input>
              </div>
              <div className="text-field-wrap paragraph100">
                <label htmlFor="password" className="field-label bodySmall100">
                  Password
                </label>
                <input
                  type="password"
                  className="inputField w-input"
                  maxLength="256"
                  name="password"
                  data-name="password"
                  id="password"
                  required=""
                ></input>
              </div>
              <div
                className="extra-form-actions-wrapper"
                style={{ marginTop: "32px", marginBottom: "16px" }}
              >
                <label className="w-checkbox checkbox-wrap no-margin-bottom">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox small"></div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="stayloggedin"
                    data-name="Checkbox"
                    placeholder="asdasd"
                    style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
                  ></input>
                  <label
                    htmlFor="checkbox"
                    className="field-label bodySmall100"
                  >
                    Remember Me
                  </label>
                </label>
                <a className="text-link muted bodySmall70">
                  Forgot your password?
                </a>
              </div>
              <input
                type="button"
                value="Log in"
                className="filled-btn full-width w-button primaryBtn btn"
              ></input>
            </form>
            <div className="success-message soft w-form-done">
              <div>Hang tight! We're signing you in...</div>
            </div>
            <div className="error-message soft w-form-fail">
              <div>Oops! Your email or password is not correct.</div>
            </div>
          </div>
          <div
            className="extra-form-actions-wrapper margin-top center no-margin-bottom"
            style={{ marginTop: "0px" }}
          >
            <div className="form-help-text bodySmall70">
              No account yet?{" "}
              <Link
                className="text-link bodySmall70"
                style={{ color: "#299617!important" }}
                to="/register"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
