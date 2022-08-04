function RegisterComp() {
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
        <a href="#" className="utility-logo-2 w-inline-block"></a>
        <div className="utility-page-form card max-width">
          <h1 className="utility-card-title h2" style={{ textAlign: "left" }}>
            Registration
          </h1>
          <div className="w-form">
            <form method="POST" action="/register" acceptCharset="UTF-8">
              <input
                type="hidden"
                name="csrf_test_name"
                value="dfa96b8cf442dcd17e6b77be6bc4fc26"
              />
              <div className="text-field-flex-wrap">
                <div className="text-field-wrap small-margin-bottom paragraph100">
                  <label
                    htmlFor="firstname"
                    className="field-label bodySmall100"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="text-field-2 w-input inputField paragraph100"
                    maxLength="256"
                    name="firstname"
                    data-name="firstname"
                    id="firstname"
                    required=""
                  />
                </div>
                <div className="text-field-spacer"></div>
                <div className="text-field-wrap small-margin-bottom">
                  <label
                    htmlFor="lastname"
                    className="field-label bodySmall100"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="text-field-2 w-input inputField"
                    maxLength="256"
                    name="lastname"
                    data-name="lastname"
                    id="lastname"
                    required=""
                  />
                </div>
              </div>
              <div className="text-field-wrap small-margin-bottom">
                <label htmlFor="email" className="field-label bodySmall100">
                  E-mail address
                </label>
                <input
                  type="email"
                  className="text-field-2 w-input inputField"
                  maxLength="256"
                  name="email"
                  data-name="email"
                  id="email"
                  required=""
                />
              </div>
              <div className="text-field-wrap">
                <label htmlFor="password-2" className="field-label">
                  Password
                </label>
                <input
                  type="password"
                  className="text-field-2 w-input inputField"
                  maxLength="256"
                  name="password"
                  data-name="password"
                  id="password-2"
                  required=""
                />
              </div>
              <div className="text-field-wrap">
                <label htmlFor="password" className="field-label">
                  Password again
                </label>
                <input
                  type="password"
                  className="text-field-2 w-input inputField"
                  maxLength="256"
                  name="password_confirm"
                  data-name="password_confirm"
                  id="password"
                  required=""
                />
              </div>
              <div className="text-field-wrap">
                <label htmlFor="wherecomefrom" className="field-label">
                  How did you find us?
                </label>
                <select
                  className="text-field w-input inputField"
                  name="wherecomefrom"
                  id="wherecomefrom"
                  required=""
                >
                  <option value="" readOnly="" disabled="" defaultValue="">
                    Please choose
                  </option>
                  <option value="Website">Website</option>
                  <option value="Googlesearch">Google Search</option>
                  <option value="Discord">Discord</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Suggestion">Suggestion</option>
                </select>
              </div>
              <div
                className="extra-form-actions-wrapper"
                style={{ marginBottom: "0px" }}
              >
                <label className="w-checkbox checkbox-wrap">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox small bodySmall100"></div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    required=""
                  />
                  <span className="checkbox-label-2 w-form-label">
                    I agree with the{" "}
                    <a className="terms-agree-link">Privacy Policy</a>
                  </span>
                </label>
              </div>
              <input
                type="submit"
                name="register"
                value="Register"
                data-wait="Please wait..."
                className="filled-btn full-width w-button btn primaryBtn"
              />
            </form>
            <div className="success-message soft w-form-done">
              <div>Hang tight! We're signing you in...</div>
            </div>
            <div className="error-message soft w-form-fail">
              <div>Oops! Your email or password is not correct.</div>
            </div>
          </div>
          <div className="extra-form-actions-wrapper margin-top center no-margin-bottom">
            <div className="form-help-text bodySmall70">
              Already registered?{" "}
              <a
                href="/login/index.html"
                className="text-link bodySmall70"
                style={{ color: "#299617" }}
              >
                Log in now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComp;
