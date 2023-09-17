import { memo } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <section className="login">
          <div className="container">
            <div className="login__block">
              <p className="login__text">Welcome back 👋</p>
              <h2 className="login__title">Login to your account</h2>
              <form className="login__form">
                <div className="login__form-control">
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
                <div className="login__form-control">
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
                <button type="submit">
                  Login <IoMdFingerPrint />
                </button>
              </form>
              <ul className="login__list">
                <li className="login__item">
                  <Link>Forgot Password ?</Link>
                </li>
                <li className="login__item">
                  <Link to={"/signUp"}>Create an account</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Login);
