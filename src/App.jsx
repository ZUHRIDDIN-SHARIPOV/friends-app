import { memo, useState } from "react";
import "./App.scss";
import Routing from "./router/Routing";
import { Hero } from "./components/re-export";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={`App ${dark ? "dark" : ""}`}>
        <Routing darkMode={darkMode} checkDark={dark} />
        <Hero />
      </div>
    </>
  );
}

export default memo(App);
