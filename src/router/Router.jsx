import { memo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/re-export";
import { Home, Login, SignUp, Error, Support } from "../pages/re-export";

const Router = ({ user, darkMode, checkDark }) => {
  return (
    <>
      <BrowserRouter>
        <Header user={user} darkMode={darkMode} checkDark={checkDark} />
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
            element={user ? <Home user={user} /> : <Navigate to={"/"} />}
          />
          <Route
            path="/support"
            element={user ? <Support /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(Router);
