import RootLayouts from "@/components/Layouts/RootLayouts";
import Porichithi from "@/components/UI/Porichithi";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">hello tanvir vai</h1>
      <ScrollingText />
      <Porichithi />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
