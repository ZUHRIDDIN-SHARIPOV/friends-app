import { memo } from "react";
import "./Support.scss";

const Support = () => {
  return (
    <>
      <main>
        <section className="support">
          <div className="container">
            <div className="support__block"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Support);
