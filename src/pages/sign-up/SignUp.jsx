import { memo } from "react";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <main>
        <section className="signUp">
          <div className="container">
            <div className="signUp__block">
              <p className="signUp__text">Welcome back 👋</p>
              <h2 className="signUp__title">Create an account</h2>
              <form className="signUp__form">
                <div className="signUp__form-control">
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Please enter your email"
                      required
                    />
                  </label>
                  <span></span>
                </div>
                <div className="signUp__form-control">
                  <label>
                    Password
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Enter password"
                      required
                    />
                  </label>
                  <span></span>
                </div>
                <div className="signUp__form-control">
                  <label>
                    Confirm Password
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Confirm Password"
                      required
                    />
                  </label>
                  <span></span>
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(SignUp);
