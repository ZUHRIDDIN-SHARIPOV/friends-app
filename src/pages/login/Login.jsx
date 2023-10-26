import { memo, useRef, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BsEyeSlash, BsEye } from "../../assets/re-export";
import { auth } from "../../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader, useNotifications } from "../../components/re-export";
import { useDarkMode } from "../../App";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [loading, setLoading] = useState(false);
  const { dark } = useDarkMode();
  const { notify } = useNotifications();

  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      setShowPassword(false);
      try {
        const { email, password } = values;
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        dark
          ? notify("Login successfully", "bottom-right", "info", "dark")
          : notify("Login successfully", "bottom-right", "info", "light");
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/invalid-login-credentials") {
          dark
            ? notify(
                "User not found, check email and password, then try again",
                "bottom-right",
                "error",
                "colored"
              )
            : notify(
                "User not found, check email and password, then try again",
                "bottom-right",
                "error",
                "light"
              );
        } else if (error.code === "auth/user-disabled") {
          dark
            ? notify(
                "The user account has been blocked by the administrator",
                "bottom-right",
                "error",
                "colored"
              )
            : notify(
                "The user account has been blocked by the administrator",
                "bottom-right",
                "error",
                "light"
              );
        } else if (error.code === "auth/too-many-requests") {
          dark
            ? notify(
                "You have made too many requests, please try again later",
                "bottom-right",
                "error",
                "colored"
              )
            : notify(
                "You have made too many requests, please try again later",
                "bottom-right",
                "error",
                "dark"
              );
        }
      }
    },
    validate: (value) => {
      let errors = {};

      if (!value.email) {
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
            {loading && <Loader loading={loading} />}
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
                      placeholder="Enter the password"
                      value={formData.values.password}
                      onChange={formData.handleChange}
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
                  <Link to={"/reset"}>Forgot Password ?</Link>
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
