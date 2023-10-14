import { memo, useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../../firebase";
import "./ForgotPassword.scss";
import ResetPasswordToastify from "../../components/reset-password-toastify/ResetPasswordToastify";
import { Loader } from "../../components/re-export";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailRef.current.focus();
    if (!email) setErrorMessage("Email cannot be empty");
    else if (!emailRegex.test(email))
      setErrorMessage("Please enter a valid email address");
    else {
      setErrorMessage("");
      setEmail("");
      try {
        setLoading(true);
        await sendPasswordResetEmail(database, email);
        setLoading(false);
        setCheck(true);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <main>
        <section className="forgot-password">
          <div className="container">
            <div className="forgot-password__block">
              <h2 className="forgot-password__title">
                Enter your email to reset your password
              </h2>
              <form className="forgot-password__form" onSubmit={handleSubmit}>
                <div className="forgot-password__form-control">
                  <input
                    type="email"
                    name="forgot_email"
                    autoComplete="off"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                  />
                  <span>{errorMessage ? errorMessage : ""}</span>
                  <div className="reset-loader">{loading && <Loader />}</div>
                </div>
                <button type="submit" className="forgot-password__form-btn">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <ResetPasswordToastify check={check} setCheck={setCheck} />
    </>
  );
};

export default memo(ForgotPassword);
