import RootLayouts from "@/components/Layouts/RootLayouts";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">hello tanvir vai</h1>
      <ScrollingText />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
