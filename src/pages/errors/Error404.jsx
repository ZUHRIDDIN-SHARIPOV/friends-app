import { memo } from "react";
import "./Error404.scss";

const Error404 = () => {
  return (
    <>
      <main>
        <section className="error404">
          <div className="container">
            <div className="error404__block"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Error404);
