import { memo } from "react";
import { Hero } from "../../components/re-export";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default memo(Home);
