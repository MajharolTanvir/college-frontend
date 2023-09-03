import RootLayouts from "@/components/Layouts/RootLayouts";
import MiniCard from "@/components/UI/MiniCard/MiniCard";
import Porichithi from "@/components/UI/Porichithi";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <ScrollingText />
      <MiniCard />
      <Porichithi />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
