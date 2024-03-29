import { memo, useState } from "react";
import "./ForgotPassword.scss";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../../auth/firebase";
import { Loader, useNotifications } from "../../components/re-export";
import { useDarkMode } from "../../App";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/;
  const [errorMessage, setErrorMessage] = useState("");

  const { notify } = useNotifications();
  const { dark } = useDarkMode();

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
        dark
          ? notify(
              "Message sent successfully",
              "bottom-right",
              "success",
              "colored"
            )
          : notify(
              "Message sent successfully",
              "bottom-right",
              "success",
              "dark"
            );
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/invalid-email") {
          dark
            ? notify(
                "The email address was entered incorrectly",
                "bottom-right",
                "error",
                "colored"
              )
            : notify(
                "The email address was entered incorrectly",
                "bottom-right",
                "error",
                "light"
              );
        }
      }
    }
  };

  return (
    <>
      <main>
        <section className="forgot-password">
          <div className="container">
            {loading && <Loader loading={loading} />}
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
