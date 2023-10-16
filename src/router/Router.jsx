import { memo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/re-export";
import {
  Error404,
  Home,
  ForgotPassword,
  Login,
  SignUp,
  Support,
} from "../pages/re-export";
import { AuthUser } from "../auth/AuthUserComponent";

const Router = ({ dark, darkMode }) => {
  const { user } = AuthUser();

  return (
    <>
      <BrowserRouter>
        <Header dark={dark} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={!user ? <Login /> : <Navigate to={"/home"} />}
          />
          <Route
            path="/signUp"
            element={!user ? <SignUp /> : <Navigate to={"/home"} />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to={"/"} />}
          />
          <Route
            path="/support"
            element={user ? <Support /> : <Navigate to={"/"} />}
          />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(Router);
