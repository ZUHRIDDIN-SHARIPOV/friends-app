import { memo } from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <main>
        <section className="portfolio">
          <div className="container">
            <div className="portfolio__block"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Portfolio);
