import RootLayouts from "@/components/Layouts/RootLayouts";
import MiniCard from "@/components/UI/MiniCard/MiniCard";
import Porichithi from "@/components/UI/Porichithi";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import Banner from "@/components/UI/banner/Banner";
import Contact from "@/components/UI/contact/Contact";
import Notice from "@/components/UI/notice/Notice";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <ScrollingText />

      <MiniCard />
      <Porichithi />
      <Notice />
      <Contact />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
