import { memo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/re-export";
import { Home, Login, SignUp, Error, Support } from "../pages/re-export";

const Routing = ({ darkMode, checkDark }) => {
  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} checkDark={checkDark} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(Routing);
