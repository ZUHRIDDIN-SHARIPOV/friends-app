import { memo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      setShowPassword(false);
    },
    validate: (value) => {
      let errors = {};

      if (!value.email) {
        emailRef.current.focus();
        errors.email = "Email cannot be empty";
      } else if (!emailRegex.test(value.email)) {
        errors.email = "Please enter a valid email address";
      }

      if (!value.password) {
        errors.password = "Password cannot be empty";
      } else if (value.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }

      return errors;
    },
  });

  const handleEnterKeyPress = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };

  return (
    <>
      <main>
        <section className="login">
          <div className="container">
            <div className="login__block">
              <p className="login__text">Welcome back 👋</p>
              <h2 className="login__title">Login to your account</h2>
              <form className="login__form" onSubmit={formData.handleSubmit}>
                <div className="login__form-control">
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Please enter your email"
                      value={formData.values.email}
                      onChange={formData.handleChange}
                      onKeyDown={(e) => handleEnterKeyPress(e, passwordRef)}
                      ref={emailRef}
                    />
                  </label>
                  <span>
                    {formData.errors.email ? formData.errors.email : ""}
                  </span>
                </div>
                <div className="login__form-control">
                  <label>
                    Password
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      placeholder="Enter password"
                      value={formData.values.password}
                      onChange={formData.handleChange}
                      onKeyDown={(e) => handleEnterKeyPress(e, emailRef)}
                      ref={passwordRef}
                    />
                    {showPassword ? (
                      <BsEye onClick={handleShowPassword} />
                    ) : (
                      <BsEyeSlash onClick={handleShowPassword} />
                    )}
                  </label>
                  <span>
                    {formData.errors.password ? formData.errors.password : ""}
                  </span>
                </div>
                <button type="submit">Login</button>
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
