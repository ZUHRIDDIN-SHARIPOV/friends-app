import { memo, useState } from "react";
import "./App.scss";
import Routing from "./router/Routing";

function App() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={`App ${dark ? "dark" : ""}`}>
        <Routing darkMode={darkMode} checkDark={dark} />
      </div>
    </>
  );
}

export default memo(App);
