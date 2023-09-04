import RootLayouts from "@/components/Layouts/RootLayouts";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import Banner from "@/components/UI/banner/Banner";
import MujibSection from "@/components/UI/mujibSection/MujibSection";
import Notice from "@/components/UI/notice/Notice";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <ScrollingText />
      <Notice />
      <MujibSection />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
