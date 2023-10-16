import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fonts.scss";
import "./index.css";
import App from "./App";
import {
  LoginToastify,
  ResetPasswordToastify,
  SignOutToastify,
  SignUpToastify,
} from "./components/notifications/re-export";
import { AuthUserComponent } from "./auth/AuthUserComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthUserComponent>
    <LoginToastify>
      <ResetPasswordToastify>
        <SignUpToastify>
          <SignOutToastify>
            <App />
          </SignOutToastify>
        </SignUpToastify>
      </ResetPasswordToastify>
    </LoginToastify>
  </AuthUserComponent>
);
