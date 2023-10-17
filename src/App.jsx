import { createContext, memo, useContext, useState } from "react";
import "./App.scss";
import Router from "./router/Router";

export const darkModeContext = createContext();

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className={`App ${dark ? "dark" : ""}`}>
        <darkModeContext.Provider value={{ dark, darkMode }}>
          <Router />
        </darkModeContext.Provider>
      </div>
    </>
  );
}

export default memo(App);

export const useDarkMode = () => useContext(darkModeContext);
