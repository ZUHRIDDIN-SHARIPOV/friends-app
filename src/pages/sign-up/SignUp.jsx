import { memo, useState, useRef } from "react";
import "./SignUp.scss";
import { useFormik } from "formik";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { auth } from "../../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Loader, useNotifications } from "../../components/re-export";
import { useDarkMode } from "../../App";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showCnfPassword, setShowCnfPassword] = useState(false);
  const handleShowCnfPassword = () => {
    setShowCnfPassword(!showCnfPassword);
  };

  const [loading, setLoading] = useState(false);
  const { dark } = useDarkMode();
  const { notify } = useNotifications();

  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cnfPasswordRef = useRef(null);

  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      setShowCnfPassword(false);
      setShowPassword(false);
      try {
        const { email, password } = values;
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
        dark
          ? notify(
              "bottom-left",
              "success",
              "colored",
              5000,
              "You have successfully registered"
            )
          : notify(
              "bottom-left",
              "success",
              "light",
              5000,
              "You have successfully registered"
            );
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/invalid-email") {
          dark
            ? notify(
                "bottom-right",
                "error",
                "colored",
                5000,
                "The email address was entered incorrectly"
              )
            : notify(
                "bottom-right",
                "error",
                "light",
                5000,
                "The email address was entered incorrectly"
              );
        } else if (error.code === "auth/email-already-in-use") {
          dark
            ? notify(
                "bottom-right",
                "error",
                "colored",
                5000,
                "This account has already been created"
              )
            : notify(
                "bottom-right",
                "error",
                "light",
                5000,
                "This account has already been created"
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

      if (!value.confirmPassword) {
        errors.confirmPassword = "Confirm Password cannot be empty";
      } else if (value.password !== value.confirmPassword) {
        errors.confirmPassword = "The verification password did not match";
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
        <section className="signUp">
          <div className="container">
            <div
              className={`signUp-loader ${
                loading ? "signUp-loader__key" : ""
              }`}>
              {loading && <Loader />}
            </div>
            <div className="signUp__block">
              <p className="signUp__text">Welcome back 👋</p>
              <h2 className="signUp__title">Create an account</h2>
              <form className="signUp__form" onSubmit={formData.handleSubmit}>
                <div className="signUp__form-control">
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
                <div className="signUp__form-control">
                  <label>
                    Password
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      placeholder="Enter password"
                      value={formData.values.password}
                      onChange={formData.handleChange}
                      onKeyDown={(e) => handleEnterKeyPress(e, cnfPasswordRef)}
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
                <div className="signUp__form-control">
                  <label>
                    Confirm Password
                    <input
                      type={showCnfPassword ? "text" : "password"}
                      name="confirmPassword"
                      autoComplete="off"
                      placeholder="Confirm Password"
                      value={formData.values.confirmPassword}
                      onChange={formData.handleChange}
                      ref={cnfPasswordRef}
                    />
                    {showCnfPassword ? (
                      <BsEye onClick={handleShowCnfPassword} />
                    ) : (
                      <BsEyeSlash onClick={handleShowCnfPassword} />
                    )}
                  </label>
                  <span>
                    {formData.errors.confirmPassword
                      ? formData.errors.confirmPassword
                      : ""}
                  </span>
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
