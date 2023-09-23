import { memo, useState } from "react";
import "./App.scss";
import Router from "./router/Router";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={`App ${dark ? "dark" : ""}`}>
        <Router darkMode={darkMode} checkDark={dark} />
      </div>
    </>
  );
}

export default memo(App);
