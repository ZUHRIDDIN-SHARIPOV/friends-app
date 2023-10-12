import { memo, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Router from "./router/Router";
import "./App.scss";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <>
      <div className={`App ${dark ? "dark" : ""}`}>
        <Router user={user} darkMode={darkMode} checkDark={dark} />
      </div>
    </>
  );
}

export default memo(App);
