import { memo } from "react";
import "./Loader.scss";

const Loader = ({ loading = true }) => {
  return (
    <>
      <div className={`loader__container ${loading ? "loader__key" : ""}`}>
        <span className="loader"></span>
      </div>
    </>
  );
};

export default memo(Loader);
