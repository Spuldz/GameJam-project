function ForgotPasswordComp() {
  return (
    <div className="utility-page-wrapper">
      <div className="utility-page-wrapper-content with-card">
        <div className="utility-page-form card max-width">
          <h1 className="utility-card-title h2" style={{ textAlign: "left" }}>
            Forgotten password
          </h1>
          <div className="w-form">
            <form method="POST" action="" accept-charset="UTF-8">
              <input
                type="hidden"
                name="csrf_test_name"
                value="cfe8b99b156990ce0b993f99e7faba6d"
              />
              <div className="text-field-wrap small-margin-bottom paragraph100">
                <label htmlFor="email" className="field-label bodySmall100">
                  E-mail address
                </label>
                <input
                  type="email"
                  className="text-field w-input inputField"
                  maxlength="256"
                  name="email"
                  data-name="email"
                  id="email"
                  required=""
                  style={{ marginBottom: "32px" }}
                />
              </div>
              <input
                type="submit"
                value="Set new password"
                data-wait="Please wait..."
                className="filled-btn full-width w-button btn primaryBtn"
              />
            </form>
          </div>
          <div
            className="extra-form-actions-wrapper margin-top center no-margin-bottom"
            style={{ marginTop: "0px" }}
          >
            <div className="form-help-text bodySmall100">
              Already registered?{" "}
              <a
                href="/login"
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

export default ForgotPasswordComp;
