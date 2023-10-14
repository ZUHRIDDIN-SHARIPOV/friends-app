import { memo, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../../firebase";
import "./ForgotPassword.scss";
import { Loader } from "../../components/re-export";
import { ResetPasswordNotify } from "../../components/notifications/re-export";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;
  const [errorMessage, setErrorMessage] = useState("");
  const { notify } = ResetPasswordNotify();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        notify();
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
            <div
              className={`reset-loader ${loading ? "reset-loader__key" : ""}`}>
              {loading && <Loader />}
            </div>
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
                  />
                  <span>{errorMessage ? errorMessage : ""}</span>
                </div>
                <button type="submit" className="forgot-password__form-btn">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(ForgotPassword);
