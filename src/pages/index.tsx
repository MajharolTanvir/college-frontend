import RootLayouts from "@/components/Layouts/RootLayouts";
import MiniCard from "@/components/UI/MiniCard/MiniCard";
import ScrollingText from "@/components/UI/Scrolling/ScrollingText";
import Banner from "@/components/UI/banner/Banner";
import MujibSection from "@/components/UI/mujibSection/MujibSection";
import Contact from "@/components/UI/contact/Contact";
import Events from "@/components/UI/events/Events";
import Introduction from "@/components/UI/introduction/Introduction";
import MessageCard from "@/components/UI/messageCard/MessageCard";
import Notice from "@/components/UI/notice/Notice";
import { ReactElement } from "react";


const Home = () => {
  
  
  return (
    <div>
      <Banner />
      <ScrollingText />
      <MiniCard />

      <Introduction />
      <MessageCard />

      <Notice />

      <MujibSection />


      <Events />

      <Contact />

    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayouts>{page}</RootLayouts>;
};
